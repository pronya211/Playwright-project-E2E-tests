import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

class RegistrationPage extends BasePage {
    constructor(page) {
       super(page);
    }

    async expectCreateAccountText() {
        await expect(this.page.getByText(' Create Account')).toBeVisible();
    }

    async registrationContinueButton() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async expectVisibleSelector() {
        await expect(this.page.locator('.alert.alert-error.alert-danger')).toBeVisible();
    }

    async expectMainErrorMessage() {
        await expect(this.page.locator('.alert.alert-error.alert-danger')).toContainText(' Error: You must agree to the Privacy Policy!');
    }

    async expectErrorMessages() {
        await expect(this.page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
        await expect(this.page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
        await expect(this.page.getByText('Email Address does not appear to be valid!')).toBeVisible();
        await expect(this.page.getByText('Address 1 must be between 3 and 128 characters!')).toBeVisible();
        await expect(this.page.getByText('City must be between 3 and 128 characters!')).toBeVisible();
        await expect(this.page.getByText('Zip/postal code must be between 3 and 10 characters!')).toBeVisible();
        await expect(this.page.getByText('Login name must be alphanumeric only and between 5 and 64 characters!')).toBeVisible();
        await expect(this.page.getByText('Password must be between 4 and 20 characters!')).toBeVisible();
    }

    async checkCss() {
        const helpBlocks = this.page.locator('.form-group.has-error > .help-block');
        const count = await helpBlocks.count();

        for (let i = 0; i < count; i++) {
            await expect(helpBlocks.nth(i)).toHaveCSS('color', 'rgb(169, 68, 66)');
        }
    }


}
export default RegistrationPage;