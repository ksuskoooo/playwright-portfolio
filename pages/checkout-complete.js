export class CheckoutCompletePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        
this.page = page;
this.completeHeader = page.getByTestId('complete-header');
this.completeOrderHeader = this.completeHeader;}}
