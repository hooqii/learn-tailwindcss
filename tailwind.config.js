/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "reg-red": "#FF2626",
        "reg-blue": "#31568E",
        "reg-green": "#18E320",
      },
    },
  },
  plugins: [],
};
