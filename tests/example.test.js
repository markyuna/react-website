// // example.test.js
// import { test, expect } from '@playwright/test';

// const {chromium} = require('@playwright/test');

// (async () => {
//   const browser = await chromium.launch();

//   test('has title', async ({ page }) => {
//     await page.goto('http://localhost:3000/');
  
//     // Espera a que el título contenga el patrón especificado.
//     await expect(page).toHaveTitle(/React App/);
//   });
  
//   test('Sculptures link', async ({ page }) => {
//     await page.goto('http://localhost:3000/');
  
//     // Espera un tiempo adicional antes de buscar el enlace.
//     await page.waitForTimeout(2000);
  
//     // Espera a que el enlace "Sculptures" esté disponible en la página.
//     await page.waitForSelector('a[data-testid="sculptures-link"]');
  
//     // Haz clic en el enlace "Sculptures".
//     await page.click('a[data-testid="sculptures-link"]');
  
//     // Verifica que la URL contenga "intro".
//     await expect(page).toHaveURL(/.*intro/);
//   });
  
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/', {
//     waitUntil: 'networkidle',
//   });
//   await page.screenshot({ path: 'example.png' });
// })();

// test('has title', async ({ page }) => {
//   await page.goto('http://localhost:3000/');

//   // Espera a que el título contenga el patrón especificado.
//   await expect(page).toHaveTitle(/React App/);
// });

// test('Sculptures link', async ({ page, browser }) => {

//   // Espera a que la página esté completamente cargada.
//   await page.goto('http://localhost:3000/');

//   // Espera un tiempo adicional antes de buscar el enlace.
//   await page.waitForTimeout(2000);

//   // Espera a que el enlace "Sculptures" esté disponible en la página.
//   const sculpturesLink = await page.waitForSelector('a[data-testid="sculptures-link"]');

//   // Haz clic en el enlace "Sculptures".
//   await sculpturesLink.click();

//   // Verifica que la URL contenga "intro".
//   await expect(page).toHaveURL(/.*intro/);

//   afterAll(() => browser.close());
// });
