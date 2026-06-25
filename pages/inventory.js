import { runInThisContext } from 'vm';

export class InventoryPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.addJacketButton = page.getByTestId('add-to-cart-sauce-labs-fleece-jacket');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.removeJacketButton = page.getByTestId('remove-sauce-labs-fleece-jacket');
    this.sortDropdown = page.locator('.product_sort_container');
    this.firstItemPrice = page.locator('.inventory_item_price').first();
  }

  async addJacketToCart() {
    await this.addJacketButton.click();
  }

  async removeJacketFromCart() {
    await this.removeJacketButton.click();
  }

  async selectSortOption(optionValue) {
    await this.sortDropdown.selectOption(optionValue);
  }

  
}
