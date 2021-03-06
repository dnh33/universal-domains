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
      display: ["laborate"],
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
        1440: "11rem",
        1920: "19.5%",
        "entrypoint-title": "54px",
      },
      height: {
        "searchbox-height": "100vh",
      },
      width: {
        "sb-sm-mobile": "90vw",
        "sb-md-mobile": "69vw",
        "searchBar-width": "48.75rem",
        "searchbox-width": "78.8125rem",
        "entrypoint-nav": "83.8125rem",
      },
      padding: {
        "searchBar-sm": "88vw",
      },
    },
  },
  plugins: [],
};
