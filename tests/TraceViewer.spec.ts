import { test, expect } from '@playwright/test';

test('Screenshot', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // Login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('Gaurav');
    await page.locator('#loginpassword').fill('Gaurav@123');
    await page.getByRole('button', { name: 'Log in' }).click();

   
    await page.locator("a[onclick='logOut()']").click();
});
