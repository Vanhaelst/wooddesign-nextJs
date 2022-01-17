import apiCall from "./apiCall";

const EMAIL_TO = "info@publipirates.be";
const NAME_TO = "wooddesign.be";

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
