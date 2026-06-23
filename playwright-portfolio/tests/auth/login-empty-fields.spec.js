import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.js';

test('should show error when fields are empty', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', '');
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
});
