const { defineConfig } = require("cypress");
const AllureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  defaultCommandTimeout: 8000, 
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
