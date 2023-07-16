import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Conexion').click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('');
  await page.getByLabel('Password').fill('');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('button', { name: 'Accept', exact: true  }).click();
});