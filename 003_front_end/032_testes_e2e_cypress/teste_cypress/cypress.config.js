const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio',
    overwrite: true, // true sobrescreve os relatórios existentes e false cria novos relatórios 
    html: true,
    json: false, // Digite true caso queira relatórios json
    timestamp: 'ddmmyyyy_HHMMss'
  }
});
