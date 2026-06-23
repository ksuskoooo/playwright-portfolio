export class InventoryPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.addJacketButton = page.getByTestId('add-to-cart-sauce-labs-fleece-jacket');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.removeJacketButton = page.getByTestId('remove-sauce-labs-fleece-jacket');
  }

  async addJacketToCart() {
    await this.addJacketButton.click();
  }

  async removeJacketFromCart() {
    await this.removeJacketButton.click();
  }
}
