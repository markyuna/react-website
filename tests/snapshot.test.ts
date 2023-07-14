import { test, expect } from '@playwright/test'

test.describe('Snapshot', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/product')
  })

  test('Je trouve le button', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('iron.png')
  })
})
