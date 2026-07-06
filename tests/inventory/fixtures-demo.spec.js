import { test, expect } from '../utils/fixtures/base-test.js';

test('adding to the cart using fixtures - demo', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce'); 

    await inventoryPage.addJacketToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');
});