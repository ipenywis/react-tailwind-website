module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": {
          500: "#212526",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
