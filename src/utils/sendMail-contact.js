import apiCall from "./apiCall";

const EMAIL_TO = "info@noorderheide.be";
const NAME_TO = "Klus- en renovatiewerken - Noorderheide";

export const sendContactMail = ({ onSuccess, onError, data = {} }) =>
  apiCall("https://api.sendinblue.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key":
        "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",
    },
    data: {
      sender: {
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
      },
      to: [
        {
          email: EMAIL_TO,
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
