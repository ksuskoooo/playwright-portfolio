import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.js';
import { InventoryPage } from '../../pages/inventory.js';
import { CartPage } from '../../pages/cart.js';
import { CheckoutCompletePage } from '../../pages/checkout-complete.js';
import { CheckoutStepOnePage } from '../../pages/checkout-step-one.js';
import { CheckOutStepTwoPage } from '../../pages/checkout-step-two.js';

test('user can complete the purchase', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addJacketToCart();
  await inventoryPage.cartBadge.click();

  const cartPage = new CartPage(page);
  await cartPage.checkoutButton.click();

  const checkoutStepOnePage = new CheckoutStepOnePage(page);
  await checkoutStepOnePage.fillCheckoutForm('John', 'Johnson', '1111');
  await checkoutStepOnePage.continueButton.click()

  const checkoutStepTwoPage = new CheckOutStepTwoPage(page);
  await checkoutStepTwoPage.finishButton.click();

  const checkoutCompletePage = new CheckoutCompletePage(page);
  await expect(checkoutCompletePage.completeOrderHeader).toHaveText('Thank you for your order!');

});