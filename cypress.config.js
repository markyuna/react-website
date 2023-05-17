const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "aw1ahy",
  plugins: [],

  devServer: {
    framework: "react",
    bundler: "webpack",
    webpackOptions: {
      // configure webpack options here if needed
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
