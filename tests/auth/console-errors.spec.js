import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.js';
import { ConsoleSpy } from '../utils/console-spy.js';

test ('test should catch errors from problem_user', async ({ context, page }) => {
    await context.clearCookies();

    const loginPage = new LoginPage(page);
    const consoleSpy = new ConsoleSpy(page);
   

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce'); 

    consoleSpy.start(); 


    await page.waitForTimeout(1000);

    expect(consoleSpy.getErrorsSummary()).toBe('');

}
);