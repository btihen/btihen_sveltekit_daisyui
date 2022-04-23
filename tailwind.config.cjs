const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  // http://colorcode.is/ - helpful color site
  daisyui: {
    themes: [
      // "garden", "autumn", "corporate",
      // "luxury", "coffee", "forest", "business",
      {
        // corporate adapted light
        btihenl: {
          primary: "#5aa867", // "#57b98b", // "#3985ff", // "#1F75FF", // "#4b6bff", // "#2d8659", // "#4b6bfb",
          secondary: "#0080bc", // "#2075ff", // "#7bc8a4", // "#57b88c", // "#16b34a", //"#1eb854", //"#3399ff", // "#4da6ff", // "#7b92b2",
          accent: "#f1db85", // "#ecce57", // "#F7F9CA", // "#EA6947",
          neutral: "#3a3a3a", // "#181a2a",
          "neutral-content": "#edf2f7",
          "base-100": "#FFFBEB", // "#e9e7e7", // "#ffffff", // (yellow-50)
          // "base-100": "#f0f8ff", // "#e9e7e7", // "#ffffff", // blueish // #F0F9FF (light-blue-50)
          "base-content": "#100f0f", //"#181a2a",
          info: "#0080bc", // "#0091D5",
          success: "#5aa867", // "#6bb176", // "#6BB187",
          warning: "#d29a2f", // "#DBAE59",
          error: "#b53729", // "#AC3E31",
          // "code-bg-color": "#f1db85", // "#f1db85",
        },
        // business adapted darker
        btihend: {
          primary: "#5aa867", //"#57b98b", //"#004d99", //"#22228B", //"#206040", // "#1C4E80",
          secondary: "#0080bc", // "#2075ff", // "#7bc8a4",  // "#57b88c", // "#16b34a", //"#1eb854", //"#3399ff", // "#4da6ff", // "#7b92b2",
          accent: "#f1db85", // "#ecce57", // "#F7F9CA", // "#EA6947",
          neutral: "#23282E",
          "base-100": "#3a3a3a", // "#202020",
          info: "#0080bc", // "#0091D5",
          success: "#5aa867", // "#6bb176", // "#6BB187",
          warning: "#d29a2f", // "#DBAE59",
          error: "#b53729", // "#AC3E31",
          // "code-bg-color": "#f1db85", // "#f1db85",
        },
        // // autumn adapted - light
        // marporil: {
        //   primary: "#8C0327",
        //   secondary: "#D85251",
        //   accent: "#D59B6A",
        //   neutral: "#826A5C",
        //   "base-100": "#f1f1f1",
        //   info: "#42ADBB",
        //   success: "#499380",
        //   warning: "#E97F14",
        //   error: "#DF1A2F",
        // }
      }
    ],
  },
  plugins: [require("daisyui")],
};

module.exports = config;
