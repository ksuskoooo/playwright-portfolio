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

