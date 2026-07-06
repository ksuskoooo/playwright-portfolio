import { test, expect } from '@playwright/test';
import { CartPage } from '../../pages/cart.js';
import { LoginPage } from '../../pages/login.js';
import { InventoryPage } from '../../pages/inventory.js';
import { CheckoutStepOnePage } from '../../pages/checkout-step-one.js';

const validationData = [
    {
        testName: 'should show error when FirstName is empty',
        firstName: '',
        lastName: 'Test',
        postalCode: '12345', // Тут у тебя было postalCode
        expectedError: 'Error: First Name is required',
    }, 
    {
        testName: 'should show error when LastName is empty',
        firstName: 'John', 
        lastName: '', 
        postalCode: '12345', // Сделали одинаково во всех объектах
        expectedError: 'Error: Last Name is required'
    },
    {
        testName: 'should show error when PostalCode is empty',
        firstName: 'John', 
        lastName: 'Doe', 
        postalCode: '', // Сделали одинаково во всех объектах
        expectedError: 'Error: Postal Code is required' 
    }
];

// 1. Исправлено: итерируемся по правильному массиву validationData
for (const data of validationData) {
    
    // 2. Исправлено: имя теста теперь берется динамически из объекта
    test(data.testName, async ({ page }) => {

        const loginPage = new LoginPage(page); 
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new InventoryPage(page);
        await inventoryPage.addJacketToCart();
        await inventoryPage.cartBadge.click();

        const cartPage = new CartPage(page); 
        await cartPage.checkoutButton.click();

        const checkoutStepOnePage = new CheckoutStepOnePage(page);
        checkoutStepOnePage.fillCheckoutForm(data.firstName, data.lastName, data.postalCode);
        await checkoutStepOnePage.continueButton.click();

        await expect(checkoutStepOnePage.errorMessage).toHaveText(data.expectedError);
    });
}