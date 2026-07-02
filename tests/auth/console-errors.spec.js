import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.js';
import { ConsoleSpy } from '../utils/console-spy.js';

test ('test should catch errors from problem_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const consoleSpy = new ConsoleSpy(page);
    consoleSpy.start(); 

    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_souce'); 


    await page.waitForTimeout(1000);

    expect(consoleSpy.assertNoErrors()).toBe(false);

}
);