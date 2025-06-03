import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async expectAccountLoginText() {
        await expect(this.page.locator('.heading1')).toHaveText(' Account Login');
    }

    async clickContinueButton() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }
}
export default LoginPage;