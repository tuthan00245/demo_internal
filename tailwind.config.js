/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "bg-body": "rgb(241 245 249 / var(--tw-bg-opacity))",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
