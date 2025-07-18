import BasePage from './BasePage.js';
import { expect } from '@playwright/test';  

class CartPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async expextShoppingCartText() {
        await expect(this.page.locator('.heading1')).toHaveText('Shopping Cart');
    }

    async expextProductNameText(user) {
        await expect(this.page.locator('.container-fluid.cart-info.product-list')).toContainText(user.productName);
    }

    async expextCountryName() {
        await expect(this.page.locator('#estimate_country')).toHaveValue('223');
    }

    async expextStateName() {
        await expect(this.page.locator('#estimate_country_zones')).toHaveValue('3624');
    }

    async expextPostCode(user) {
        await expect(this.page.locator('#estimate_postcode')).toHaveAttribute('value', user.postcode);
    }

    async clickCheckoutButton() {
        await this.page.locator('#cart_checkout2').click();
    }

    
}
export default CartPage;