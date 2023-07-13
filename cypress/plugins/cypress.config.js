const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'aw1ahy',
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
