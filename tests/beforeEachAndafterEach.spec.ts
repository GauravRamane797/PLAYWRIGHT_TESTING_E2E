import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/index.html');

    // Login
    await page.locator('#login2').click();
    await page.locator("#loginusername").fill("Gaurav");
    await page.locator("#loginpassword").fill("Gaurav@123");
    // await page.locator("//button[normalize-space()='Log in']").click();
    await page.getByRole('button', { name: 'Log in' }).click();

    // Ensure the home page is fully loaded
    await page.waitForTimeout(3000);
});

test.afterEach(async ({page}) => {
    // Ensure the logout button is visible before clicking
    await page.locator("a[onclick='logOut()']").click();
});

test('Home Page Test', async () => {
    // Wait for product elements to be present

    // Home Page - Verify number of products displayed
    const products = await page.$$('.hrefch');
    console.log(`Total Products Found: ${products.length}`); // Debugging Log
    expect(products).toHaveLength(9);
});

test('Add Product to cart Test', async () => {
    // Wait for the product link to be visible before clicking
    
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    
    // Wait for 'Add to cart' button to be visible before clicking
    await page.locator("//a[@class='btn btn-success btn-lg']").click();
    
    await page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });
});
