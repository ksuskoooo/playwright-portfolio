import { test, expect } from '../utils/fixtures/base-test.js';
import { faker } from '@faker-js/faker'

test('user can complete the purchase', async ({
  loginPage,
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  checkoutStepTwoPage,
  checkoutCompletePage
}) => {

  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomZipCode = faker.location.zipCode('####');
 
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');


  await inventoryPage.addJacketToCart();
  await inventoryPage.cartBadge.click();


  await cartPage.checkoutButton.click();

  await checkoutStepOnePage.fillCheckoutForm( randomFirstName, randomLastName, randomZipCode);
  await checkoutStepOnePage.continueButton.click()


  await checkoutStepTwoPage.finishButton.click();

 
  await expect(checkoutCompletePage.completeOrderHeader).toHaveText('Thank you for your order!');

});