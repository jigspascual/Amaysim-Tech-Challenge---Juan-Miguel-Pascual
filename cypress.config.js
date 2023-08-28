const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs-extra");
module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1800,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile;
      const pathToConfigFile = path.resolve(
        __dirname,
        "cypress",
        "plugins",
        "configs",
        `${file}.json`
      );
      return fs.readJson(pathToConfigFile);
    },
    specPattern: "./cypress/integration/test-specs/*.spec.{feature,js,ts}",
  },
  env: {
    baseUrl: "https://www.amaysim.com.au/",
  },
});
