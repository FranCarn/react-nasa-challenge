/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "300px", max: "767px" },

        md: { min: "768px", max: "1023px" },

        lg: { min: "1024px", max: "1279px" },

        xl: { min: "1280px" },
      },
    },
  },
  plugins: [],
};
