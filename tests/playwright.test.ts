import { test, expect } from '@playwright/test'

test('Mon premier test', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await expect(page).toHaveTitle(/React App/)
  const getStarted = page.locator('text=Home').first()
  await expect(getStarted).toHaveAttribute('href', '/docs/intro')
  await getStarted.click()
  await expect(page.locator('text=Sculptures').first()).toBeVisible()
})
