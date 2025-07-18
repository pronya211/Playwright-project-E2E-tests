// @ts-check
import { test, expect } from '@playwright/test';
import user from '../Fixtures/user.json'; 
import Application from '../app/index';




test('Buy', async ({ page }) => {
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

  await app.clickOnLogo();

  // Expect a text "Welcome to the Automation Test Store!".
  await app.expexctWelcomeText();

  await app.fillProductName(user);
  await app.clickSearchButton();

  await app.openProductPage();

  //product page
  await app.productPage.clickOnCurtButton();

  //cart page
  await app.cartPage.expextShoppingCartText();
  await app.cartPage.expextProductNameText(user);
  await app.cartPage.expextCountryName();
  await app.cartPage.expextStateName();
  await app.cartPage.expextPostCode(user);

  await app.cartPage.clickCheckoutButton();


  //checkout page
  await app.checkoutPage.expextCheckoutConfirmationText();
  await app.checkoutPage.expextUserFirstName(user);
  await app.checkoutPage.expextUserLastName(user);
  await app.checkoutPage.expextUserAddress1t(user);
  await app.checkoutPage.expextUserState(user);
  await app.checkoutPage.expextUserCity(user);
  await app.checkoutPage.expextUserPostcode(user);
  await app.checkoutPage.expextUserCountry(user);

  await app.checkoutPage.clickConfirmOrderButton();

  await app.checkoutPage.expextCreatedOrderText();
});




