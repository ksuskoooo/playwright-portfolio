import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.js';


test('should handle slow server response for performance user', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  const startTimer = Date.now();
  await loginPage.login('performance_glitch_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  const duration = Date.now() - startTimer;
  console.log(`Login took ${duration}ms`);
  expect(duration).toBeGreaterThan(4500); 
});