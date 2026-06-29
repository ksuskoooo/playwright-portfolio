export class CartPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByTestId('checkout');
    this.errorMessage = page.getByTestId('error');
  }
}
