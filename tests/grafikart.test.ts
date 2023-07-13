import { test, expect } from '@playwright/test';

test.describe('Grafikart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://grafikart.fr/tutoriels/cypress-993')
  })

  test('Affiche 0 commentaire', async ({ page }) => {
    await page.route('**/api/comments*', route => route.fulfill({
      status: 200,
      body: '[]',
    }))
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(page.locator('.comments__title')).toHaveText('5 commentaire')
  })
})
