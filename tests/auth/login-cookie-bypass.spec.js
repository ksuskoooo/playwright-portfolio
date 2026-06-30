import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/inventory.js';

test ('bypass login using cookies', async ({context, page}) =>{
    await context.addCookies ([
        {
            name: 'session-username',
            value: 'standard_user',
            domain: 'www.saucedemo.com',
            path: '/',
        }
        
    ]);

    const inventoryPage = new InventoryPage(page);
await page.goto('https://www.saucedemo.com/inventory.html');

await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await expect(inventoryPage.titleProducts).toBeVisible();

} )