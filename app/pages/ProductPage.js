import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

class ProductPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async clickOnCurtButton() {
        await this.page.locator('.cart').click();
    }

    
}
export default ProductPage;