
import { test, expect } from '@playwright/test'
import LoginButton from '../src/components/Form/Login'
import { render } from '@testing-library/react';

test('Login', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    render(<LoginButton />)
    await expect(page).toHaveURL();
    await page.getByRole('link', { name: 'Conexion' }).click();
});
