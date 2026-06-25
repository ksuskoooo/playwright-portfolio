import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.js';
import { InventoryPage } from '../../../pages/inventory.js';

test('user can add jacket to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.selectSortOption('lohi');

    await expect(inventoryPage.firstItemPrice.first()).toHaveText('$7.99');

});