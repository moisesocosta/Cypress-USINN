const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://usinnmodeler.vercel.app/',
    env: {
      viewportWidthBreakpoint: 768,
    },
    chromeWebSecurity: false,
    video: true,
    experimentalWebKitSupport: true,
  },
});