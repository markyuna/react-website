import { test, expect } from '@playwright/test';
// import { render } from 'preact';
import Navbar from '../src/components/Navbar/Navbar';

test('Component Navbar', async ({ page }) => {
  await page.setContent(<Navbar />);

  // Wait for rendering to complete (adjust the timeout value if needed)
  await page.waitForTimeout(1000); // 3 seconds delay

  // Check if the component is visible
  await expect(page.locator('.Navbar')).toBeVisible();
});

test('does not show prototypes for object and array inline', () => {
  const object = {
    array: [{hello: 'Danger'}],
  };
  expect(object).toMatchInlineSnapshot(`
{
  "array": [
    {
      "hello": "Danger",
    },
  ],
}
    `);
});