// @ts-check
import { test, expect } from '@playwright/test';
import user from '../fixtures/user.json'; 
import { faker } from '@faker-js/faker';
import Application from '../app/index';


test.describe.configure({ mode: 'serial' });

user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.email = faker.internet.email({ provider: 'fakerMail.com'});
user.loginName = faker.internet.username();

test.describe('Registration', () => {


test('Registration with empty fields', async ({ page }) => {
  const app = new Application(page);
 
  
  //home page
  await app.open();
  //await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  //await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  await app.openLoginPage();
  // await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  // await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await app.loginPage.expectAccountLoginText();
  //await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await app.loginPage.clickContinueButton();
  //await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await app.registrationPage.expectCreateAccountText();
  //await expect(page.getByText(' Create Account')).toBeVisible();
  await app.registrationPage.registrationContinueButton();
  //await page.getByRole('button', { name: 'Continue' }).click();

  await app.registrationPage.expectVisibleSelector();
  //await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await app.registrationPage.expectMainErrorMessage();
  //await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' Error: You must agree to the Privacy Policy!');
 
  await app.registrationPage.expectErrorMessages();
  // await expect(page.getByText('First Name must be between 1 and 32 characters!')).toBeVisible();
  // await expect(page.getByText('Last Name must be between 1 and 32 characters!')).toBeVisible();
  // await expect(page.getByText('Email Address does not appear to be valid!')).toBeVisible();
  // await expect(page.getByText('Address 1 must be between 3 and 128 characters!')).toBeVisible();
  // await expect(page.getByText('City must be between 3 and 128 characters!')).toBeVisible();
  // await expect(page.getByText('Zip/postal code must be between 3 and 10 characters!')).toBeVisible();
  // await expect(page.getByText('Login name must be alphanumeric only and between 5 and 64 characters!')).toBeVisible();
  // await expect(page.getByText('Password must be between 4 and 20 characters!')).toBeVisible();

  await app.registrationPage.checkCss();
  // const helpBlocks = page.locator('.form-group.has-error > .help-block');
  // const count = await helpBlocks.count();

  // for (let i = 0; i < count; i++) {
  //   await expect(helpBlocks.nth(i)).toHaveCSS('color', 'rgb(169, 68, 66)');
  // }

});

test('Registration with empty "First Name" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' First Name must be between 1 and 32 characters!');
  
  await expect(page.locator('.form-group.has-error > .help-block')).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveText(' First Name must be between 1 and 32 characters!');
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Registration with empty "Last Name" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' Last Name must be between 1 and 32 characters!');
  
  await expect(page.locator('.form-group.has-error > .help-block')).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveText(' Last Name must be between 1 and 32 characters!');
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Registration with empty "E-Mail" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' Email Address does not appear to be valid!');
  
  await expect(page.locator('.form-group.has-error > .help-block')).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveText(' Email Address does not appear to be valid!');
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Registration with empty "Address 1" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' Address 1 must be between 3 and 128 characters!');
  
  await expect(page.locator('.form-group.has-error > .help-block')).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveText(' Address 1 must be between 3 and 128 characters!');
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Registration with empty "City" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' City must be between 3 and 128 characters!');
  
  await expect(page.locator('.form-group.has-error > .help-block')).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveText(' City must be between 3 and 128 characters!');
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Registration with empty "ZIP Code" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' Zip/postal code must be between 3 and 10 characters!');
  
  await expect(page.locator('.form-group.has-error > .help-block')).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveText(' Zip/postal code must be between 3 and 10 characters!');
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Registration with empty "Login name" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger'))
        .toContainText(' Login name must be alphanumeric only and between 5 and 64 characters!');
  
  await expect(page.locator('.form-group.has-error > .help-block')).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block'))
        .toHaveText(' Login name must be alphanumeric only and between 5 and 64 characters!');
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Registration with empty "Password" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger'))
        .toContainText(' Password must be between 4 and 20 characters!');
        await expect(page.locator('.alert.alert-error.alert-danger'))
        .toContainText(' Password confirmation does not match password!');
  
  await expect(page.locator('.form-group.has-error > .help-block').first()).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block').first())
        .toHaveText('Password must be between 4 and 20 characters!');
  await expect(page.locator('.form-group.has-error > .help-block').first()).toHaveCSS('color', 'rgb(169, 68, 66)');

  await expect(page.locator('.form-group.has-error > .help-block').last()).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block').last())
        .toHaveText('Password confirmation does not match password!');
  await expect(page.locator('.form-group.has-error > .help-block').last()).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Registration with empty "Password Confirm" field', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger'))
        .toContainText('Password confirmation does not match password!');
  
  await expect(page.locator('.form-group.has-error > .help-block')).toBeVisible();
  await expect(page.locator('.form-group.has-error > .help-block'))
        .toHaveText('Password confirmation does not match password!');
  await expect(page.locator('.form-group.has-error > .help-block')).toHaveCSS('color', 'rgb(169, 68, 66)');

});

test('Success registration', async ({ page }) => {
  
  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();
  
  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

  //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  await page.getByRole('button', { name: 'Continue' }).click();

  //Registration page
  await expect(page.getByText(' Create Account')).toBeVisible();
  await page.locator('#AccountFrm_firstname').fill(user.firstName);
  await page.locator('#AccountFrm_lastname').fill(user.lastName);
  await page.locator('#AccountFrm_email').fill(user.email);
  await page.locator('#AccountFrm_address_1').fill(user.address1);
  await page.locator('#AccountFrm_city').fill(user.city);
  await page.locator('#AccountFrm_country_id').selectOption({label: user.country});
  await page.locator('#AccountFrm_zone_id').selectOption({label:user.state});
  await page.locator('#AccountFrm_postcode').fill(user.postcode);
  await page.locator('#AccountFrm_loginname').fill(user.loginName);
  await page.locator('#AccountFrm_password').fill(user.password);
  await page.locator('#AccountFrm_confirm').fill(user.password);
  await page.getByRole('radio', { name: 'Yes' }).check();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeChecked();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText(' Your Account Has Been Created!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.locator('.subtext')).toHaveText(user.firstName);

});

});


