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
        // Warm, muted palette: ivory canvas, charcoal ink, forest green as
        // the action colour and brass for small decorative accents.
        ivory: "#faf8f5",
        sand: "#f2eee7",
        ink: "#1c1a17",
        body: "#57534d",
        muted: "#8c867b",
        line: "#e6e1d8",
        stone: "#d6d0c5",
        charcoal: "#1f1d1a",
        brass: "#a98a5a",
        primary: {
          DEFAULT: "#61993b",
          light: "#6b8a5f",
          dark: "#2f4630",
        },
        error: "#F84F31",
      },
      // `--font-display` / `--font-sans` are set by next/font in pages/_app.js.
      fontFamily: {
        display: [
          "var(--font-display)",
          "'Cormorant Garamond'",
          "Georgia",
          "'Times New Roman'",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "Inter",
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        primary: [
          "var(--font-display)",
          "'Cormorant Garamond'",
          "Georgia",
          "serif",
        ],
        secondary: [
          "var(--font-sans)",
          "Inter",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
        system: [
          "var(--font-sans)",
          "Inter",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-zoom": {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
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
        "fade-up": "fade-up 1s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        "hero-zoom": "hero-zoom 2.6s cubic-bezier(0.22, 0.61, 0.36, 1) both",
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
