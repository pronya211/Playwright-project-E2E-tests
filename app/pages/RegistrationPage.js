import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

class RegistrationPage extends BasePage {
    constructor(page) {
       super(page);
    }

    async expectCreateAccountText() {
        await expect(this.page.getByText(' Create Account')).toBeVisible();
    }

    async checkregistrationRadioButton() {
        await this.page.getByRole('radio', { name: 'Yes' }).check();
        await expect(this.page.getByRole('radio', { name: 'Yes' })).toBeChecked();
    }

    async checkregistrationCheckbox() {
        await this.page.getByRole('checkbox').check();
        await expect(this.page.getByRole('checkbox')).toBeChecked();
    }

    async registrationContinueButton() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async expectMainErrorMessage() {
        await this.page.waitForSelector('.alert.alert-error.alert-danger', { state: 'visible' });
        
    }

    async сontinueButtonAfterRegistration() {
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }

    async expectErrorMessagesWithEmptyFields() {
        await expect(this.page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
        await expect(this.page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
        await expect(this.page.getByText('Email Address does not appear to be valid!')).toBeVisible();
        await expect(this.page.getByText('Address 1 must be between 3 and 128 characters!')).toBeVisible();
        await expect(this.page.getByText('City must be between 3 and 128 characters!')).toBeVisible();
        await expect(this.page.getByText('Zip/postal code must be between 3 and 10 characters!')).toBeVisible();
        await expect(this.page.getByText('Login name must be alphanumeric only and between 5 and 64 characters!')).toBeVisible();
        await expect(this.page.getByText('Password must be between 4 and 20 characters!')).toBeVisible();
    }

    async registrationWithEmptyFirstNameField(user) {
        await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
        await this.page.locator('#AccountFrm_email').fill(user.email);
        await this.page.locator('#AccountFrm_address_1').fill(user.address1);
        await this.page.locator('#AccountFrm_city').fill(user.city);
        await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
        await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
        await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
        await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
        await this.page.locator('#AccountFrm_password').fill(user.password);
        await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }

    async registrationWithEmptyLastNameField(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_email').fill(user.email);
       await this.page.locator('#AccountFrm_address_1').fill(user.address1);
       await this.page.locator('#AccountFrm_city').fill(user.city);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
       await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
       await this.page.locator('#AccountFrm_password').fill(user.password);
       await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }

    async registrationWithEmptyEmailField(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
       await this.page.locator('#AccountFrm_address_1').fill(user.address1);
       await this.page.locator('#AccountFrm_city').fill(user.city);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
       await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
       await this.page.locator('#AccountFrm_password').fill(user.password);
       await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }

    async registrationWithEmptyAddress1Field(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
       await this.page.locator('#AccountFrm_email').fill(user.email);
       await this.page.locator('#AccountFrm_city').fill(user.city);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
       await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
       await this.page.locator('#AccountFrm_password').fill(user.password);
       await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }

    async registrationWithEmptyCityField(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
       await this.page.locator('#AccountFrm_email').fill(user.email);
       await this.page.locator('#AccountFrm_address_1').fill(user.address1);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
       await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
       await this.page.locator('#AccountFrm_password').fill(user.password);
       await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }

    async registrationWithEmptyZipCodeField(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
       await this.page.locator('#AccountFrm_email').fill(user.email);
       await this.page.locator('#AccountFrm_address_1').fill(user.address1);
       await this.page.locator('#AccountFrm_city').fill(user.city);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
       await this.page.locator('#AccountFrm_password').fill(user.password);
       await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }
    async registrationWithEmptyLoginNameField(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
       await this.page.locator('#AccountFrm_email').fill(user.email);
       await this.page.locator('#AccountFrm_address_1').fill(user.address1);
       await this.page.locator('#AccountFrm_city').fill(user.city);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
       await this.page.locator('#AccountFrm_password').fill(user.password);
       await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }
    async registrationWithEmptyPasswordField(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
       await this.page.locator('#AccountFrm_email').fill(user.email);
       await this.page.locator('#AccountFrm_address_1').fill(user.address1);
       await this.page.locator('#AccountFrm_city').fill(user.city);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
       await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
       await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }
    async registrationWithEmptyConfirmPasswordField(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
       await this.page.locator('#AccountFrm_email').fill(user.email);
       await this.page.locator('#AccountFrm_address_1').fill(user.address1);
       await this.page.locator('#AccountFrm_city').fill(user.city);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
       await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
       await this.page.locator('#AccountFrm_password').fill(user.password);
    }

    async successRegistration(user) {
       await this.page.locator('#AccountFrm_firstname').fill(user.firstName);
       await this.page.locator('#AccountFrm_lastname').fill(user.lastName);
       await this.page.locator('#AccountFrm_email').fill(user.email);
       await this.page.locator('#AccountFrm_address_1').fill(user.address1);
       await this.page.locator('#AccountFrm_city').fill(user.city);
       await this.page.locator('#AccountFrm_country_id').selectOption({label: user.country});
       await this.page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
       await this.page.locator('#AccountFrm_postcode').fill(user.postcode);
       await this.page.locator('#AccountFrm_loginname').fill(user.loginName);
       await this.page.locator('#AccountFrm_password').fill(user.password);
       await this.page.locator('#AccountFrm_confirm').fill(user.password);
    }

    async expectFirstNameErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block')).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block')).toHaveText(' First Name must be between 1 and 32 characters!');
    }

    async expectLastNameErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block')).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block')).toHaveText(' Last Name must be between 1 and 32 characters!');
    }

    async expectEmailErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block')).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block')).toHaveText(' Email Address does not appear to be valid!');
    }

    async expectAddress1ErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block')).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block')).toHaveText(' Address 1 must be between 3 and 128 characters!');
    }

    async expectCityErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block')).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block')).toHaveText(' City must be between 3 and 128 characters!');
    }

    async expectZipCodeErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block')).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block')).toHaveText(' Zip/postal code must be between 3 and 10 characters!');
    }

    async expectLoginNameErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block')).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block'))
        .toHaveText(' Login name must be alphanumeric only and between 5 and 64 characters!');
    }

    async expectPasswordErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block').first()).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block').first())
        .toHaveText('Password must be between 4 and 20 characters!');

        await expect(this.page.locator('.form-group.has-error > .help-block').last()).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block').last())
        .toHaveText('Password confirmation does not match password!');
    }

    async expectConfirmPasswordErrorMessages() {
        await expect(this.page.locator('.form-group.has-error > .help-block')).toBeVisible();
        await expect(this.page.locator('.form-group.has-error > .help-block'))
        .toHaveText('Password confirmation does not match password!');
    }

    async expectAccountCreatedMessages() {
        await expect(this.page.getByText(' Your Account Has Been Created!')).toBeVisible();
    }



}
export default RegistrationPage;