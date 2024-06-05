/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          primary: "#ff5f20",
          DEFAULT: "#1E3A8A",
          dark: "#1E2B8A",
        },
      },
    },
  },
  plugins: [],
};
