import { test, expect } from '@playwright/test'

test('Mon premier test', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await expect(page).toHaveTitle(/React App/)
  const getStarted = page.locator('button:has-text("Voir les oeuvres")').first();
  await getStarted.textContent();
  await getStarted.click()
  await expect(page.locator('text=Sculptures').first()).toBeVisible()
})
