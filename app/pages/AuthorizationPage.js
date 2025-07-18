import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

class AuthorizationPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async expectAccountLoginText() {
        await expect(this.page.locator('.heading1')).toHaveText(' Account Login');
    }

    async clickContinueButton() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async clickLoginButton() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async authorizationWithEmptyLoginNameField(user) {
       await this.page.locator('#loginFrm_loginname').fill(user.loginName);
    }

    async authorizationWithEmptyPasswordField(user) {
       await this.page.locator('#loginFrm_password').fill(user.password);
    }

    async successAuthorization(user) {
       await this.page.locator('#loginFrm_loginname').fill(user.loginName);
       await this.page.locator('#loginFrm_password').fill(user.password);
    }

    async expectAuthorizationErrorMessage() {
        await this.page.waitForSelector('.alert.alert-error.alert-danger', { state: 'visible' });
        await expect(this.page.locator('.alert.alert-error.alert-danger')).toContainText(' Error: Incorrect login or password provided.');
        
    }

}
export default AuthorizationPage;