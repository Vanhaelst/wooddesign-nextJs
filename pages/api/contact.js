// Server-side endpoint for the contact form. Keeps the Brevo API key off the
// client and filters spam with: method check, honeypot, minimum fill time,
// reCAPTCHA v3, a per-IP rate limit and server-side validation.

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const BREVO_URL = "https://api.brevo.com/v3/smtp/email";
const MIN_SCORE = 0.5;
const MIN_FILL_MS = 3000;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

// Best effort only: memory is per server instance (and per serverless warm
// container), so this slows bursts but is not a hard guarantee.
const hits = new Map();

const rateLimited = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
};

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const verifyRecaptcha = async (token, ip) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn("RECAPTCHA_SECRET_KEY is not set: skipping reCAPTCHA check");
    return true;
  }
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  const response = await fetch(RECAPTCHA_VERIFY_URL, { method: "POST", body });
  const result = await response.json();
  return (
    result.success === true &&
    (result.action === undefined || result.action === "contact") &&
    (result.score ?? 0) >= MIN_SCORE
  );
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (rateLimited(ip)) {
    return res.status(429).json({ error: "rate_limited" });
  }

  const body = req.body || {};

  // Bots tend to fill every field, including the hidden one, and submit
  // instantly. Answer with a fake success so they don't learn what tripped.
  const startedAt = Number(body.startedAt);
  const tooFast = !startedAt || Date.now() - startedAt < MIN_FILL_MS;
  if (clean(body.website, 200) || tooFast) {
    return res.status(200).json({ ok: true });
  }

  const data = {
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    street: clean(body.street, 160),
    city: clean(body.city, 80),
    postalCode: clean(body.postalCode, 20),
    extra: clean(body.extra, 3000),
  };

  const required = ["firstName", "lastName", "email", "phone", "street", "city", "postalCode"];
  if (required.some((key) => !data[key]) || !EMAIL.test(data.email)) {
    return res.status(400).json({ error: "invalid" });
  }

  try {
    if (!(await verifyRecaptcha(body.recaptchaToken, ip))) {
      return res.status(403).json({ error: "recaptcha_failed" });
    }
  } catch (error) {
    console.error("reCAPTCHA verification failed", error);
    return res.status(502).json({ error: "recaptcha_unavailable" });
  }

  const apiKey =
    process.env.BREVO_API_KEY || process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;
  const to =
    process.env.CONTACT_EMAIL_TO || process.env.NEXT_PUBLIC_SENDINBLUE_EMAIL_TO;
  if (!apiKey || !to) {
    console.error("Missing BREVO_API_KEY or CONTACT_EMAIL_TO");
    return res.status(500).json({ error: "not_configured" });
  }

  const name = `${data.firstName} ${data.lastName}`;

  try {
    const response = await fetch(BREVO_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { email: data.email, name },
        to: [{ email: to, name: "wooddesign.be" }],
        replyTo: { email: data.email, name },
        templateId: 8,
        params: {
          email: data.email,
          name,
          firstName: data.firstName,
          lastName: data.lastName,
          address: {
            street: data.street,
            city: data.city,
            postalCode: data.postalCode,
          },
          phone: data.phone,
          extra: data.extra,
        },
      }),
    });

    if (!response.ok) {
      console.error("Brevo error", response.status, await response.text());
      return res.status(502).json({ error: "send_failed" });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Brevo request failed", error);
    return res.status(502).json({ error: "send_failed" });
  }
}
