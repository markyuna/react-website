import { test } from "@playwright/test";

test.describe.only('Sharedrop.io', () => {
  test('Should share a file', async ({page, browser}) => {
    const page2 = await browser.newPage()
    await page2.goto('https://www.sharedrop.io/rooms/playwright-test')
    await page.goto('https://www.sharedrop.io/rooms/playwright-test')
    await page.bringToFront()
    await page.pause()

    afterAll(() => browser.close());
  })
})
