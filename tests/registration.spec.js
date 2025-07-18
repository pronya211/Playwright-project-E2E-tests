// @ts-check
import { test, expect } from '@playwright/test';
import user from '../Fixtures/user.json'; 
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

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();
  await app.registrationPage.registrationContinueButton();

 
  await app.registrationPage.expectMainErrorMessage();
 
  await app.registrationPage.expectErrorMessagesWithEmptyFields();
});

test('Registration with empty "First Name" field', async ({ page }) => {
  const app = new Application(page);

  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();
  await app.registrationPage.registrationWithEmptyFirstNameField(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectFirstNameErrorMessages();
});

test('Registration with empty "Last Name" field', async ({ page }) => {
  const app = new Application(page);
  
  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.registrationWithEmptyLastNameField(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectLastNameErrorMessages();
});

test('Registration with empty "Email" field', async ({ page }) => {
  const app = new Application(page);

  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.registrationWithEmptyEmailField(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectEmailErrorMessages();
});

test('Registration with empty "Address 1" field', async ({ page }) => {
  const app = new Application(page);
  
  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.registrationWithEmptyAddress1Field(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectAddress1ErrorMessages();
});

test('Registration with empty "City" field', async ({ page }) => {
  const app = new Application(page);
  
  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.registrationWithEmptyCityField(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectCityErrorMessages();
});

test('Registration with empty "ZIP Code" field', async ({ page }) => {
  const app = new Application(page);
  
  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.registrationWithEmptyZipCodeField(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectZipCodeErrorMessages();
});

test('Registration with empty "Login name" field', async ({ page }) => {
  const app = new Application(page);
  
  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.registrationWithEmptyLoginNameField(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectLoginNameErrorMessages();
});

test('Registration with empty "Password" field', async ({ page }) => {
  const app = new Application(page);
  
  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.registrationWithEmptyPasswordField(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectPasswordErrorMessages();
});

test('Registration with empty "Password Confirm" field', async ({ page }) => {
  const app = new Application(page);
  
  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.registrationWithEmptyConfirmPasswordField(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();
  
  await app.registrationPage.expectMainErrorMessage();
  
  await app.registrationPage.expectConfirmPasswordErrorMessages();
});

test('Success registration', async ({ page }) => {
  const app = new Application(page);
  
  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();
  
  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickContinueButton();

  //Registration page
  await app.registrationPage.expectCreateAccountText();

  await app.registrationPage.successRegistration(user);

  await app.registrationPage.checkregistrationRadioButton();

  await app.registrationPage.checkregistrationCheckbox();

  await app.registrationPage.registrationContinueButton();

  await app.registrationPage.expectAccountCreatedMessages();

  await app.registrationPage.сontinueButtonAfterRegistration();

  await app.accountPage.expectLoginNameFromAccountPage(user);
});

});