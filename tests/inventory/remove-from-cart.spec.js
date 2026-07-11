

import { test, expect } from '../utils/fixtures/base-test';

test ('user can add jacket to the cart', async ({ 
    loginPage, 
    inventoryPage, 
    
}) => 
{ 
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addJacketToCart(); 
    await inventoryPage.removeJacketFromCart();

    await expect(inventoryPage.cartBadge).toBeHidden();


});