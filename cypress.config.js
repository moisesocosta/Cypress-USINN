const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      viewportWidthBreakpoint: 768,
    },
    chromeWebSecurity: false,
    video: true,
    experimentalWebKitSupport: true,
  },
});