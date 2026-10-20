const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "recaptcha-v3";

let loading;

// Loads Google's reCAPTCHA v3 script once, and only when asked (the contact
// form calls this on first interaction so other pages never contact Google).
export const loadRecaptcha = () => {
  if (!SITE_KEY || typeof window === "undefined") return Promise.resolve(false);
  if (window.grecaptcha?.execute) return Promise.resolve(true);
  if (loading) return loading;

  loading = new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => window.grecaptcha.ready(() => resolve(true));
    script.onerror = () => {
      loading = undefined;
      resolve(false);
    };
    document.head.appendChild(script);
  });
  return loading;
};

// Resolves to a token, or "" when reCAPTCHA is not configured / unavailable
// (the server decides whether that is acceptable).
export const getRecaptchaToken = async (action = "contact") => {
  if (!(await loadRecaptcha())) return "";
  try {
    return await window.grecaptcha.execute(SITE_KEY, { action });
  } catch {
    return "";
  }
};
