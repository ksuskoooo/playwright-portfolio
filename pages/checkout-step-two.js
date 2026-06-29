export class CheckOutStepTwoPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {

this.page = page;
this.finishButton = page.getByTestId('finish');
this.completeHeader = page.getByTestId('complete-header');
this.completeOrderHeader = this.completeHeader;

    }
}
