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

    async clickOnLogo() {
        await this.page.locator('.logo').click();
    }

    async fillProductName(user) {
        await this.page.getByRole('textbox', {name: 'Search Keywords'}).fill(user.productName);
    }

    async clickSearchButton() {
        await this.page.locator('#filter_keyword').press('Enter');
    }

    async openProductPage() {
        await this.page.getByTitle('Brunette expressions Conditioner').click();
    }


    
}
export default BasePage;