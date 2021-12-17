module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "entry-purple": "#461BC2",
        "entry-pink": "#FF00C1",
        "conical-purple": "#521AC2",
        "conical-pink": "#E502C2",
      },
      borderRadius: {
        entrypoint: "5rem",
        80: "80px",
      },
      margin: {
        59: "59px",
      },
      height: {
        "entrypoint-searchbox-height": "100vh",
      },
      width: {
        "entrypoint-searchbox-width": "78.8125rem",
        "entrypoint-nav": "83.8125rem",
      },
    },
  },
  plugins: [],
};
