import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com');

    // Login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('Gaurav');
    await page.locator('#loginpassword').fill('Gaurav@123');
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000)

    // Debug: Check if logout button appears
    const isLogoutVisible = await page.locator("//a[@id='logout2']").isVisible();
    console.log('Logout button visibility:', isLogoutVisible);
});

test.afterAll(async () => {
    // Ensure the logout button is present before clicking
    await page.locator("a[onclick='logOut()']").click();
});

test('Home Page Test', async () => {
    // Home Page
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9);
});

test('Add Product to cart Test', async () => {
    // Home Page
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()    
    await page.locator("//a[normalize-space()='Add to cart']").click()

    await page.on('dialog', dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Product added')
        dialog.accept();
    }
    );
});
