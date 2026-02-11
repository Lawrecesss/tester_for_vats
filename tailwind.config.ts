/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // include your app folder
    "./components/**/*.{js,ts,jsx,tsx}" // optional: if you have components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
