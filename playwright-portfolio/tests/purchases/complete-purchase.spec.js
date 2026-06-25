import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.js';
import { InventoryPage } from '../../../pages/inventory.js';
import { CartPage } from '../../../pages/cart.js';

test('user can complete the purchase', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addJacketToCart();
  await inventoryPage.cartBadge.click();

  const cartPage = new CartPage(page);
  await cartPage.checkoutButton.click();
  await cartPage.fillCheckoutForm('John', 'Johnson', '1111');
  await cartPage.continueButton.click();
  await cartPage.finishButton.click();

  await expect(cartPage.completeOrderHeader).toHaveText('Thank you for your order!');
});