import { test, expect } from '@playwright/test';
import { h, render } from 'preact';
import { Navbar } from '../src/components/Navbar/Navbar';

test('Component Navbar', async ({ page }) => {
  await page.setContent('.Navbar');

  // Verifica que el componente sea visible
  await expect(page.locator('.Navbar')).toBeVisible();

  // Realiza más pruebas y aserciones según sea necesario
  render(<Navbar />, document.getElementById('navbar'));
});
