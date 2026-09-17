const colors = {
  black: "#191919",
  white: "#FAFAFA",
  grey: {
    10: "rgb(243, 244, 244)",
    20: "rgb(237, 237, 237)",
    30: "rgb(215, 215, 215)",
    40: "rgb(184, 184, 184)",
    50: "rgb(145, 145, 145)",
    60: "rgb(105, 105, 105)",
    70: "rgb(71, 71, 71)",
    80: "rgb(47, 47, 47)",
    90: "rgb(33, 33, 33)",
    100: "rgb(28, 28, 28)",
  },
  primary: {
    // Wooddesign's brand green (matches the webshop, favicon mask icon and
    // richtext link color). #8dc63f itself is too light for AA text/border
    // contrast on white, so `main`/`dark` are darkened working shades of the
    // same hue and `light` keeps the bright brand lime for banners/badges.
    main: "#4a7322",
    light: "#8dc63f",
    dark: "#375719",
    text: "#fff",
  },
  link: {
    main: "#4a7322",
    dark: "#375719",
  },
  error: "#F84F31",
};

export default colors;
