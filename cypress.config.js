const { defineConfig } = require("cypress");
const { env } = require("process");

module.exports = defineConfig({
  projectId: 'ztrjtn',
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    env: {

    }

    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.defaultCommandTimeout: 6500,
      this.screenshotOnRunFailure: false,
      this.chromeWebSecurity: false
      
    },
  },
});
