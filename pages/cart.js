export class CartPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByTestId('checkout');
    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');
    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.postCodeInput = page.getByTestId('postalCode');
    this.completeHeader = page.getByTestId('complete-header');
    this.completeOrderHeader = this.completeHeader;
    this.errorMessage = page.getByTestId('error');
  }

  async fillCheckoutForm(firstName, lastName, postCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postCodeInput.fill(postCode);
  }
}
