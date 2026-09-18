/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./publipirates-react/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    // `xs` (480px) replaces the old grid's "small" breakpoint.
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8dc63f",
          light: "#a4d266",
          dark: "#72a230",
        },
        error: "#F84F31",
      },
      fontFamily: {
        primary: [
          "'Open Sans'",
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        secondary: [
          "'Open Sans'",
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        system: [
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        reveal: {
          "0%, 75%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        moveupwards: {
          "0%, 75%": { width: "100px", height: "100px", margin: "2em auto" },
          "100%": { width: "75px", height: "75px", margin: "1em auto" },
        },
        stroke: {
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s",
        reveal: "reveal 1s 1s forwards",
        moveupwards: "moveupwards 1s 1s forwards",
        "stroke-circle": "stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
        "stroke-check":
          "stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards",
      },
    },
  },
  plugins: [],
};
