const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ebac-agenda-contatos-tan.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
