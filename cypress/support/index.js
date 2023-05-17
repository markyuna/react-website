import { mount } from '@cypress/react';
import '@cypress/react/support';

Cypress.Commands.add('mount', mount);

const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          }
        ]
      }
    },
  };

  on('file:preprocessor', webpack(options));

  return config;
};
