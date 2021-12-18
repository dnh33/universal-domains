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
      fontSize: {
        70: "70px",
      },
      borderRadius: {
        entrypoint: "5rem",
        50: "50px",
        80: "80px",
      },
      outlineWidth: {
        twelve: "13px",
        10: "10px",
        9: "9px",
      },
      margin: {
        59: "59px",
        67: "67px",
        "entrypoint-title": "27px",
      },
      height: {
        "entrypoint-searchbox-height": "100vh",
      },
      width: {
        "entrypoint-searchbox-width": "78.8125rem",
        "entrypoint-searchBar-width": "48.75rem",
        "entrypoint-nav": "83.8125rem",
      },
    },
  },
  plugins: [],
};
