import axios from "axios";
import { getRecaptchaToken } from "./recaptcha";

// Posts to our own API route (pages/api/contact.js); the mail provider key
// and the reCAPTCHA secret stay on the server.
export const sendContactMail = async ({
  onSuccess,
  onError,
  data = {},
  startedAt,
}) => {
  try {
    const recaptchaToken = await getRecaptchaToken("contact");
    const response = await axios.post("/api/contact", {
      ...data,
      startedAt,
      recaptchaToken,
    });
    return onSuccess ? onSuccess(response.data) : response.data;
  } catch (error) {
    if (onError) onError(error);
    throw error;
  }
};

export default sendContactMail;
