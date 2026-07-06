import { test as base } from '@playwright/test';
import { LoginPage } from '../../../pages/login.js';
import { InventoryPage } from '../../../pages/inventory.js';
import { CartPage } from '../../../pages/cart.js';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});

export { expect } from '@playwright/test';