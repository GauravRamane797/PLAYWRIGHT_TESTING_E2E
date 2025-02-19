import { test, expect } from '@playwright/test';

test('Screenshot' , async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')

    // Login
    await page.locator('//a[@id="login2"]').click();
    await page.locator('#loginusername').fill('Gaurav');
    await page.locator('#loginpassword').fill('Gaurav@123');
    await page.locator("//button[normalize-space()='Log in']").click();
});
