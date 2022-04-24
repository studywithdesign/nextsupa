module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0050FE",
        backgroundColor: "#EBEBEB",
        lightTextColor: "#B9B9B9",
        mediumTextColor: "#4E4E4E",
      },
      fontFamily: {
        'quicksand': ['Quicksand'],
        'poppins': ['Poppins']
      }
    },
  },
  plugins: [],
};
