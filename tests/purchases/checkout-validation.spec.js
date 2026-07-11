// import { test, expect } from '@playwright/test';
// import { CartPage } from '../../pages/cart.js';
// import { LoginPage } from '../../pages/login.js';
// import { InventoryPage } from '../../pages/inventory.js';
// import { CheckoutCompletePage } from '../../pages/checkout-complete.js';
// import { CheckoutStepOnePage } from '../../pages/checkout-step-one.js';
// import { CheckOutStepTwoPage } from '../../pages/checkout-step-two.js';

// test('should show error when checkout fields are empty', async ({ page }) => { 

//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.login('standard_user', 'secret_sauce');
  
//     const inventoryPage = new InventoryPage(page);
//     await inventoryPage.addJacketToCart();
//     await inventoryPage.cartBadge.click();
  
//     const cartPage = new CartPage(page);
//     await cartPage.checkoutButton.click();

//     const checkoutStepOnePage = new CheckoutStepOnePage(page);
//     await checkoutStepOnePage.continueButton.click();

//     await expect(checkoutStepOnePage.errorMessage).toHaveText('Error: First Name is required')

// }) 

import { test, expect } from '../utils/fixtures/base-test.js'; 

test ('should show error when checkout fields are empty', async ({
    loginPage, 
    inventoryPage, 
    cartPage,
    checkoutStepOnePage, 
}) => {

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addJacketToCart(); 
    await inventoryPage.cartBadge.click(); 

    await cartPage.checkoutButton.click();

    await checkoutStepOnePage.continueButton.click();

    await expect(checkoutStepOnePage.errorMessage).toHaveText('Error: First Name is required')


})

