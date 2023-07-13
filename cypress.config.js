import { defineConfig } from "cypress";
const domain = 'react-website-jb92';
const baseDomain = 'react-website-jb92';

const urls = [
  `https://${baseDomain}.vercel.app`,
  `https://${baseDomain}-markyuna.vercel.app`,
  `https://${baseDomain}-git-master-markyuna.vercel.app`,
  `https://${baseDomain}.vercel.app`,
];

const formattedUrls = urls.map((url) => `${domain}-${url}`);

console.log(formattedUrls);

export default defineConfig({
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
