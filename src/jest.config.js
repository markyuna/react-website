import '@testing-library/jest-dom';

module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
};
