const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight : 1000,
  viewportWidth : 1800,
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress\\integration\\test-specs\\*.spec.{feature,js,ts}"
  },
});
