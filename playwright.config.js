// @ts-check
import { PlaywrightTestConfig, devices } from '@playwright/test';

  /* Configure projects for major browsers */
  const config: PlaywrightTestConfig = {
    timeout: 2_000,
    retries: 0,
    use: {
      trace: 'on-first-retry'
    },
    webServer: {
      command: 'npx http-server -p 3000 ./',
      url: 'http://localhost:3000/',
      reuseExistingServer: true,
      timeout: 2_000
    },
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },
    ],
  }

  export default config;
