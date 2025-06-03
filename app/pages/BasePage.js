import { expect } from '@playwright/test';

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('/');
    }

    async expexctWelcomeText() {
        await expect(this.page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
    }

    async openLoginPage() {
        await this.page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
        await this.page.getByRole('link', {name:'  Login'}).click();
    }
    
}
export default BasePage;