import apiCall from "./apiCall";

const EMAIL_FROM = "info@wooddesign.be";
const NAME_TO = "wooddesign.be";

export const sendContactMail = ({
  SENDINBLUE_API_KEY,
  SENDINBLUE_EMAIL_TO,
  onSuccess,
  onError,
  data = {},
}) =>
  apiCall("https://api.sendinblue.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": SENDINBLUE_API_KEY,
    },
    data: {
      sender: {
        email: EMAIL_FROM,
        name: `${data.firstName} ${data.lastName}`,
      },
      to: [
        {
          email: SENDINBLUE_EMAIL_TO,
          name: NAME_TO,
        },
      ],
      replyTo: {
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
      },
      templateId: 1,
      params: {
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
        firstName: data.firstName,
        lastName: data.lastName,
        address: {
          street: data.street,
          city: data.city,
          postalCode: data.postalCode
        },
        phone: data.phone,
        extra: data.extra,
      },
    },
    onSuccess: (response) => {
      if (onSuccess) {
        return onSuccess(response);
      }
      return response;
    },
    onError: (error) => {
      if (onError) {
        onError(error);
      }
      throw error;
    },
  });

export default sendContactMail;
