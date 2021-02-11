import apiCall from "./apiCall";

const EMAIL_TO = "info@publipirates.be";
const NAME_TO = "Wooddesign bvba";

export const sendContactMail = ({ onSuccess, onError, data = {} }) =>
    apiCall("https://api.sendinblue.com/v3/smtp/email", {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": "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"
        },
        data: {
            sender: {
                email: data.email,
                name: `${data.firstName} ${data.lastName}`
            },
            to: [
                {
                    email: EMAIL_TO,
                    name: NAME_TO
                }
            ],
            replyTo: {
                email: data.email,
                name: `${data.firstName} ${data.lastName}`
            },
            templateId: 1,
            params: {
                email: data.email,
                name: `${data.firstName} ${data.lastName}`,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                question: data.extra,
                address: {
                    street: data.street,
                    city: data.city,
                    postalCode: data.postalCode,
                }
            }
        },
        onSuccess: response => {
            if (onSuccess) {
                return onSuccess(response);
            }
            return response;
        },
        onError: error => {
            if (onError) {
                onError(error);
            }
            throw error;
        }
    });

export default sendContactMail;
