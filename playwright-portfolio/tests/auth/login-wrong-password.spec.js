import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.js';
test('should show error for invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'wrong_password');
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});
