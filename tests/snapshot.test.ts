import { test, expect } from '@playwright/test'

test.describe('Snapshot', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5000/')
  })

  test('Je trouve le button', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('button.png')
  })
})
