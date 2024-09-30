import defaultTheme from "publipirates-react/src/theme";

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: {
      main: "#8dc63f",
      light: "#a4d266",
      dark: "#72a230",
      text: "#fff",
    },
  },
  font: {
    ...defaultTheme.font,
    family: {
      primary:
        "'Open Sans',-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      secondary:
        "'Open Sans',-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      system:
        "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    },
  },
};

export default theme;
