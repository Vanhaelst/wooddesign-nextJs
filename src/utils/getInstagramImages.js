import apiCall from "./apiCall";

var InstagramToken = "";

const getInstagramImages = () => {
  const fields = "id,caption";

  return apiCall(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=${InstagramToken}`,
    {
      method: "POST",
    }
  );
};

export default getInstagramImages;
