import { test, expect } from '@playwright/test'

test('Mon premier test', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await expect(page).toHaveTitle(/React App/)
  const getStarted = page.locator('text=Home').first()
  await expect(getStarted).toHaveAttribute('href', '/galerie')
  await getStarted.click()
  await expect(page.locator('text=Sculptures').first()).toBeVisible()
})

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveTitle(/React App/)
  await page.getByText('Conexion').click();
  await page.getByRole('button', { name: 'Continue with Google' }).click();
  await page.getByLabel('Adresse e-mail ou numéro de téléphone').click();
  await page.getByRole('button', { name: 'Suivant' }).click();
  await page.getByLabel('Réessayer').click();
  await page.getByLabel('Adresse e-mail ou numéro de téléphone').fill('');
  await page.getByRole('button', { name: 'Suivant' }).click();
});