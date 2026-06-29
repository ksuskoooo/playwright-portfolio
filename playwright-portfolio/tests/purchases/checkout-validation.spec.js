import { test, expect } from '@playwright/test';
import { CartPage } from '../../../pages/cart.js';
import { LoginPage } from '../../pages/login.js';
import { InventoryPage } from '../../pages/inventory.js';

test('should show error when checkout fields are empty', async ({ page }) => { 

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addJacketToCart();
    await inventoryPage.cartBadge.click();
  
    const cartPage = new CartPage(page);
    await cartPage.checkoutButton.click();
    await cartPage.continueButton.click()

    await expect(cartPage.errorMessage).toHaveText('Error: First Name is required')

}) 