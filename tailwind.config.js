/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        min_screen: "75vw",
        w_un: "unset",
        "9/13": "71%",
      },
      maxWidth: {
        w_max_un: "unset",
      },
      spacing: {
        mr_un: "unset",
      },
    },
  },
  plugins: [],
};
