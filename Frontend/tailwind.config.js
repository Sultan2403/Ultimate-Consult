/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0247f5", // Deep Blue
        secondary: "#3B82F6", // Light Blue
        accent: "#06B6D4", // Teal / Cyan
        dark: "#111827", // Almost Black
        light: "#F3F4F6", // Light Gray
        white: "#FFFFFF",
        success: "#16A34A", // Green for check icons
      },
    },
  },
  plugins: [],
};
