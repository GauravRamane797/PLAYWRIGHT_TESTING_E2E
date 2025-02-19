const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const AddCartPage = require('../pages/CartPage');

test('User can login, select a product, and add to cart', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html")
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const addCartPage = new AddCartPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('Gaurav', 'Gaurav@123');

    await homePage.gotoHomePage();
    await homePage.selectProduct('Samsung galaxy s6');

    await addCartPage.addToCart();
    await addCartPage.goToCart();
});
