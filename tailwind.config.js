/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
      },

      backgroundImage: {
        mobile: "url('/assets/images/background-pattern-mobile.svg')",
        desktop: "url('/assets/images/background-pattern-desktop.svg')",
      },
    },
    fontFamily: {
      body: ["Work Sans", "sans-serif"],
    },
  },
};
