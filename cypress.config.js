const { defineConfig } = require("cypress");
const AllureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  env: {
    allureResultsPath: "allure-results",
  },
  e2e: {
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
    },

    excludeSpecPattern: "/e2e/Specs/**/*.js",
  },
});
