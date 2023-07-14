import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'Español' }).click();
  await page.getByPlaceholder('Buscar en Wikipedia').click();
  await page.getByPlaceholder('Buscar en Wikipedia').fill('perros ');
  await page.getByRole('link', { name: 'Perro de caza compañero de cacería' }).click();
});
