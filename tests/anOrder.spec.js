// @ts-check
import { test, expect } from '@playwright/test';
import user from '../Fixtures/user.json'; 
import { findProduct } from '../Fixtures/searchHelper.js';




test('Buy', async ({ page }) => {

  await page.goto('/');

   // Expect a text "Welcome to the Automation Test Store!".
   await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();

   //base page
   await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
   await page.getByRole('link', {name:'  Login'}).click();
 
     //login page
   await expect(page.locator('.heading1')).toHaveText(' Account Login');
   await page.locator('#loginFrm_loginname').fill(user.loginName);
   await page.locator('#loginFrm_password').fill(user.password);
   await page.getByRole('button', { name: 'Login' }).click();
   await expect(page.locator('.subtext')).toHaveText(user.firstName);

  await page.locator('.logo').click();

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();

  findProduct(page, user.productName);

  //product page
  await page.locator('.cart').click();

  //cart page
  await expect(page.locator('.heading1')).toHaveText('Shopping Cart');
  await expect(page.locator('.container-fluid.cart-info.product-list')).toContainText(user.productName);
  await expect(page.locator('#estimate_country')).toHaveValue('223');
  await expect(page.locator('#estimate_country_zones')).toHaveValue('3624');
  await expect(page.locator('#estimate_postcode')).toHaveAttribute('value', user.postcode);

  await page.locator('#cart_checkout2').click();

  //checkout page
  await expect(page.locator('.heading1')).toHaveText('Checkout Confirmation');
  await expect(page.locator('.table.confirm_shippment_options')).toContainText(user.firstName);
  await expect(page.locator('.table.confirm_shippment_options')).toContainText(user.lastName);
  await expect(page.locator('.table.confirm_shippment_options')).toContainText(user.address1);
  await expect(page.locator('.table.confirm_shippment_options')).toContainText(user.state);
  await expect(page.locator('.table.confirm_shippment_options')).toContainText(user.city);
  await expect(page.locator('.table.confirm_shippment_options')).toContainText(user.postcode);
  await expect(page.locator('.table.confirm_shippment_options')).toContainText(user.country);

  await page.getByTitle('Confirm Order').click();

  //order confirmation page
  await expect(page.locator('.heading1')).toHaveText('Your Order Has Been Processed!');


});




