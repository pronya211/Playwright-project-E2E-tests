// @ts-check
import { test, expect } from '@playwright/test';
import user from '../Fixtures/user.json'; 
import Application from '../app/index';

test.describe.configure({ mode: 'serial' });

test.describe('Authorization', () => {

test('Authorization with empty fields', async ({ page }) => {
  const app = new Application(page);

  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();

  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  await app.authorizationPage.clickLoginButton();

  await app.authorizationPage.expectAuthorizationErrorMessage();
});

test('Authorization with empty "Login Name" field', async ({ page }) => {
  const app = new Application(page);

  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();

  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  
  await app.authorizationPage.authorizationWithEmptyLoginNameField(user);

  await app.authorizationPage.clickLoginButton();

  await app.authorizationPage.expectAuthorizationErrorMessage();
});

test('Authorization with empty "Password" field', async ({ page }) => {
  const app = new Application(page);

  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();

  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();
  
  await app.authorizationPage.authorizationWithEmptyPasswordField(user);

  await app.authorizationPage.clickLoginButton();

  await app.authorizationPage.expectAuthorizationErrorMessage();
});

test('Success authorization', async ({ page }) => {
  const app = new Application(page);

  await app.open();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();

  //base page
  await app.openLoginPage();

  //login page
  await app.authorizationPage.expectAccountLoginText();

  await app.authorizationPage.successAuthorization(user);

  await app.authorizationPage.clickLoginButton();

  await app.accountPage.expectLoginNameFromAccountPage(user);
});

});

