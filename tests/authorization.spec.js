// @ts-check
import { test, expect } from '@playwright/test';
import user from '../Fixtures/user.json'; 




test.describe('Authorization', () => {

test('Success authorization', async ({ page }) => {

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

});


test('Authorization with empty fields', async ({ page }) => {

  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();

  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

    //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' Error: Incorrect login or password provided.');
  

});

test('Authorization with empty "Login Name" field', async ({ page }) => {

  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();

  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

    //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  
  await page.locator('#loginFrm_loginname').fill(user.loginName);
  await page.getByRole('button', { name: 'Login' }).click(); 

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' Error: Incorrect login or password provided.');
  

});

test('Authorization with empty "Password" field', async ({ page }) => {

  await page.goto('/');

  // Expect a text "Welcome to the Automation Test Store!".
  await expect(page.getByText('Welcome to the Automation Test Store! ')).toBeVisible();

  //base page
  await page.locator('#main_menu_top').getByText('Account Login Check Your Order').hover();
  await page.getByRole('link', {name:'  Login'}).click();

    //login page
  await expect(page.locator('.heading1')).toHaveText(' Account Login');
  
  await page.locator('#loginFrm_password').fill(user.password);
  await page.getByRole('button', { name: 'Login' }).click(); 

  await expect(page.locator('.alert.alert-error.alert-danger')).toBeVisible();
  await expect(page.locator('.alert.alert-error.alert-danger')).toContainText(' Error: Incorrect login or password provided.');
  

});

});

