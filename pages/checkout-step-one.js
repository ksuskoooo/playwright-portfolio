export class CheckoutStepOnePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {

this.page = page;
this.continueButton = page.getByTestId('continue');
this.finishButton = page.getByTestId('finish');
this.cancelButton = page.getByTestId('cancel');
this.firstNameInput = page.getByTestId('firstName');
this.lastNameInput = page.getByTestId('lastName');
this.postCodeInput = page.getByTestId('postalCode');
this.errorMessage = page.getByTestId('error');

    }

    async fillCheckoutForm(firstName, lastName, postCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postCodeInput.fill(postCode);
    }
}
