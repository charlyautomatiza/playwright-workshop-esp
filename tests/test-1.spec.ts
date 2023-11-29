import { test, expect } from '@playwright/test';

test('Login as Admin - Logout', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('button', { name: 'Let me hack!' }).click();
  await page.getByRole('link', { name: 'Admin panel' }).click();
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('admin');
  await page.getByTestId('username').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('submit').click();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByTestId('login-header')).toContainText('Log into your account');
  await expect(page.getByTestId('submit')).toBeVisible();
});
