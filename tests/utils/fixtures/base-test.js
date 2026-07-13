import { test as base } from '@playwright/test';
import { LoginPage } from '../../../pages/login.js';
import { InventoryPage } from '../../../pages/inventory.js';
import { CartPage } from '../../../pages/cart.js';
import { CheckoutStepOnePage } from '../../../pages/checkout-step-one.js';
import { CheckOutStepTwoPage} from '../../../pages/checkout-step-two.js';
import { CheckoutCompletePage} from '../../../pages/checkout-complete.js';
import { CheckOutValidationData } from '../data-factories/checkout-data.js';

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
    }, 
    checkoutStepOnePage: async ({ page }, use) => {
        const checkoutStepOnePage = new CheckoutStepOnePage(page);
        await use(checkoutStepOnePage);
    }, 
    checkoutStepTwoPage: async ({ page }, use) => {
        const checkoutStepTwoPage = new CheckOutStepTwoPage(page);
        await use(checkoutStepTwoPage);
    }, 
    checkoutCompletePage: async ({ page }, use) => {
        const checkoutCompletePage = new CheckoutCompletePage(page);
        await use(checkoutCompletePage);
    }, 
    invalidCheckOutData: async ({}, use) => {
        await use(CheckOutValidationData.getInvalidCheckOutData());
    }
});

export { expect } from '@playwright/test';

