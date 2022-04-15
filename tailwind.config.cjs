const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      "garden", "autumn", "corporate",
      "luxury", "coffee", "forest", "business",
      {
        // corporate - light
        btihen: {
          primary: "#2d8659", // "#4b6bfb",
          secondary: "#3399ff", // "#4da6ff", // "#7b92b2",
          accent: "#67cba0",
          neutral: "#181a2a",
          "neutral-content": "#edf2f7",
          "base-100": "#ffffff",
          "base-content": "#181a2a",
        },
        // business / darker
        marpori: {
          primary: "#206040", // "#1C4E80",
          secondary: "#004d99", // "#7C909A",
          accent: "#EA6947",
          neutral: "#23282E",
          "base-100": "#202020",
          info: "#0091D5",
          success: "#6BB187",
          warning: "#DBAE59",
          error: "#AC3E31",
        }
      }
    ],
  },
  plugins: [require("daisyui")],
};

module.exports = config;
