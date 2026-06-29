import { test, expect } from '@playwright/test';
import { CartPage } from '../../pages/cart.js';
import { LoginPage } from '../../pages/login.js';
import { InventoryPage } from '../../pages/inventory.js';
import { CheckoutCompletePage } from '../../pages/checkout-complete.js';
import { CheckoutStepOnePage } from '../../pages/checkout-step-one.js';
import { CheckOutStepTwoPage } from '../../pages/checkout-step-two.js';


test('item remain in a cart if the purchase was canceled', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addJacketToCart(); 
    await inventoryPage.cartBadge.click();
    
    const cartPage = new CartPage(page);
    await cartPage.checkoutButton.click();

    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    await checkoutStepOnePage.cancelButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    console.log(cartPage.cartBadge)
    await expect(cartPage.cartBadge).toHaveText('1');

})