// @ts-check
import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./global.setup'),
  use: {
    baseURL: 'http://localhost:3000/',
    storageState: 'state.json',
  },
  outputDir: 'test-results',
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']}
    },
    // Add more projects for different browsers if needed
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
});
