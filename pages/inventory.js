export class InventoryPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
      this.page = page;
      this.addJacketButton = page.getByTestId('add-to-cart-sauce-labs-fleece-jacket');
      this.cartBadge = page.locator('.shopping_cart_badge');
    }
  
    async addJacketToCart() {
      await this.addJacketButton.click();
    }
  }