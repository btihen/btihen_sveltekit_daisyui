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
        // corporate adapted light
        btihenl: {
          primary: "#1F75FF", // "#4b6bff", // "#2d8659", // "#4b6bfb",
          secondary: "#16b34a", //"#1eb854", //"#3399ff", // "#4da6ff", // "#7b92b2",
          accent: "#67cba0",
          neutral: "#181a2a",
          "neutral-content": "#edf2f7",
          "base-100": "#ffffff",
          "base-content": "#181a2a",
        },
        // business adapted darker
        btihend: {
          primary: "#004d99", //"#22228B", //"#206040", // "#1C4E80",
          secondary: "#006400", //"#228b22", // "#004d99", // "#7C909A",
          accent: "#EA6947",
          neutral: "#23282E",
          "base-100": "#202020",
          info: "#0091D5",
          success: "#6BB187",
          warning: "#DBAE59",
          error: "#AC3E31",
        },
        // autumn adapted - light
        marporil: {
          primary: "#8C0327",
          secondary: "#D85251",
          accent: "#D59B6A",
          neutral: "#826A5C",
          "base-100": "#f1f1f1",
          info: "#42ADBB",
          success: "#499380",
          warning: "#E97F14",
          error: "#DF1A2F",
        }
      }
    ],
  },
  plugins: [require("daisyui")],
};

module.exports = config;
