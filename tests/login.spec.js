import { test, expect } from '@playwright/test';

test('User most be logged in succesfully', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Conexion').click();
  await page.getByRole('button', { name: 'Continue with Google' }).click();
  await expect(page).toHaveTitle(/Sign in - Google Accounts/)

});