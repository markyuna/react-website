// example.test.js
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Espera a que el título contenga el patrón especificado.
  await expect(page).toHaveTitle(/React App/);
});

test('Sculptures link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Espera a que la página esté completamente cargada.
  await page.waitForLoadState('networkidle');

  // Espera un tiempo adicional antes de buscar el enlace.
  await page.waitForTimeout(2000);

  // Espera a que el enlace "Sculptures" esté disponible en la página.
  const sculpturesLink = await page.waitForSelector('a[data-testid="sculptures-link"]');

  // Haz clic en el enlace "Sculptures".
  await sculpturesLink.click();

  // Verifica que la URL contenga "intro".
  await expect(page).toHaveURL(/.*intro/);
});
