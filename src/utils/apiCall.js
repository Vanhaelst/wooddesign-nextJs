import axios from "axios";

const apiCall = (url, { headers, onSuccess, onError, ...config }) =>
  axios({
    url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...config,
  })
    .then((response) => onSuccess(response.data))
    .catch((error) => {
      if (onError) {
        onError(error);
      }
    });

export default apiCall;
