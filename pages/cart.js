export class CartPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
      this.page = page;


     this.checkoutButton =  page.getByTestId('checkout');
     this.continueButton = page.getByTestId('continue');
     this.finishButton = page.getByTestId('finish');

     // SauceDemo uses data-test="first-name|last-name|postal-code"
     this.firstNameInput = page.getByTestId('firstName');
     this.lastNameInput = page.getByTestId('lastName');
     this.postCodeInput = page.getByTestId('postalCode');


     // SauceDemo uses data-test="complete-header"
     this.completeHeader = page.getByTestId('complete-header');
     this.completeOrderHeader = this.completeHeader;
    }


     async fillCheckoutForm(firstName, lastName, postCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postCodeInput.fill(postCode);
     }
     
    }