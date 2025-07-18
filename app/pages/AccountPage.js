import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

class AccountPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async expectLoginNameFromAccountPage(user) {
        await expect(this.page.locator('.subtext')).toHaveText(user.firstName);
    }

    
}
export default AccountPage;