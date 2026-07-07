import { test, expect } from '../utils/fixtures/base-test.js';

test('user can complete the purchase', async ({
  loginPage,
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  checkoutStepTwoPage,
  checkoutCompletePage
}) => {
 
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');


  await inventoryPage.addJacketToCart();
  await inventoryPage.cartBadge.click();


  await cartPage.checkoutButton.click();

  await checkoutStepOnePage.fillCheckoutForm('John', 'Johnson', '1111');
  await checkoutStepOnePage.continueButton.click()


  await checkoutStepTwoPage.finishButton.click();

 
  await expect(checkoutCompletePage.completeOrderHeader).toHaveText('Thank you for your order!');

});