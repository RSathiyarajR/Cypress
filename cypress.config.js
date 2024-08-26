const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "wq9pxi",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    
    },
    //specPattern:'CYPRESSCLASS/cypress/API/'
    baseUrl:"https://rahulshettyacademy.com/angularpractice/shop"
  },
});
