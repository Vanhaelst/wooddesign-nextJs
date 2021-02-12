import apiCall from "./apiCall";

var InstagramToken =
  "IGQVJXaEZAtdWNpLWRLS0ZAKSUQ3OWtEM0diaXJaZAEVvOFJpZA3doNWFRZAmQzT0ZAyYldoLXJERkp6RzdkVDJ4cUxfcVJIMWZAENlhsUUI4Q1QzWmh5S0dpYm81NENUVk5rSE5UV1hCSUNR";

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
