import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the page you want to test
  await page.goto('http://localhost:3000/');

  // Test all the links on the page
  const links = await page.$$('a');
  for (const link of links) {
    const href = await link.getAttribute('href');
    if (href) {
      await Promise.all([
        page.waitForNavigation(), // Wait for navigation
        link.click() // Click on the link
      ]);
      console.log(`Navigated to: ${href}`);
    }
  }

  // Test all the buttons on the page
  const buttons = await page.$$('Button');
  for (const button of buttons) {
    await button.click();
    console.log('Clicked on a button');
  }

  await browser.close();
})();
