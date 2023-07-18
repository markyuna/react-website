import { test, expect } from '@playwright/test';

test('Verifier les clic', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Home').click();
  await expect(page).toHaveTitle(/React App/)
  await page.getByText('Sculptures', { exact: true }).click();
  await expect(page).toHaveURL('http://localhost:3000/pricing');
  await page.getByRole('link', { name: 'Galerie' }).click();
  await page.locator('div:nth-child(2) > div > img').first().click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: '❌', exact: true }).click();
  await page.locator('section').filter({ hasText: 'Find more about usOur TeamOur team consists of the best experts in the industry,' }).getByRole('img').nth(1).click();
  await page.locator('section').filter({ hasText: 'Find more about usOur TeamOur team consists of the best experts in the industry,' }).getByRole('img').nth(1).click();
  await page.locator('section').filter({ hasText: 'Find more about usOur TeamOur team consists of the best experts in the industry,' }).getByRole('img').nth(1).click();
  await page.locator('section').filter({ hasText: 'Find more about usOur TeamOur team consists of the best experts in the industry,' }).getByRole('img').nth(1).click();
});