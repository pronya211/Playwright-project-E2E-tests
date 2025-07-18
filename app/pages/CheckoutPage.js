import BasePage from './BasePage.js';
import { expect } from '@playwright/test';  

class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async expextCheckoutConfirmationText() {
        await expect(this.page.locator('.heading1')).toHaveText('Checkout Confirmation');
    }

    async expextUserFirstName(user) {
        await expect(this.page.locator('.table.confirm_shippment_options')).toContainText(user.firstName);
    }

    async expextUserLastName(user) {
        await expect(this.page.locator('.table.confirm_shippment_options')).toContainText(user.lastName);
    }

    async expextUserAddress1t(user) {
        await expect(this.page.locator('.table.confirm_shippment_options')).toContainText(user.address1);
    }

    async expextUserState(user) {
        await expect(this.page.locator('.table.confirm_shippment_options')).toContainText(user.state);
    }

    async expextUserCity(user) {
        await expect(this.page.locator('.table.confirm_shippment_options')).toContainText(user.city);
    }

    async expextUserPostcode(user) {
        await expect(this.page.locator('.table.confirm_shippment_options')).toContainText(user.postcode);
    }

    async expextUserCountry(user) {
        await expect(this.page.locator('.table.confirm_shippment_options')).toContainText(user.country);
    }

    async clickConfirmOrderButton() {
        await this.page.getByTitle('Confirm Order').click();
    }

    async expextCreatedOrderText() {
        await expect(this.page.locator('.heading1')).toHaveText('Your Order Has Been Processed!');
    }

}
export default CheckoutPage;