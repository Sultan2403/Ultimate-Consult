/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0247f5",
        secondary: "#3B82F6",
        accent: "#06B6D4",
        dark: "#111827",
        light: "#F3F4F6",
        white: "#FFFFFF",
        success: "#16A34A",
        brand: {
          emerald: "#059669",
          "emerald-dark": "#047857",
          slate: "#0f172a",
          surface: "#f8fafc",
        },
      },
      boxShadow: {
        "nav-glow": "0 0 0 1px rgba(5, 150, 105, 0.25), 0 0 18px rgba(5, 150, 105, 0.25)",
      },
    },
  },
  plugins: [],
};
