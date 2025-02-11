import { test, expect } from '@playwright/test';

test('Select QA Engineer from Job Title dropdown', async ({ page }) => {
    // Navigate to the OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Log in with admin credentials
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();

    // Wait for the dashboard to load and click on "PIM"
    await page.waitForSelector("//span[normalize-space()='PIM']", { state: 'visible' });
    await page.locator("//span[normalize-space()='PIM']").click();

    // // Click on the Job Title dropdown
    // await page.waitForSelector("//label[contains(text(),'Job Title')]", { state: 'visible' });
    // await page.locator("//label[contains(text(),'Job Title')]").click();

    // Click on the first occurrence of the "-- Select --" dropdown
    const dropdown = await page.locator("//div[contains(@class, 'oxd-select-text-input')]", { hasText: '-- Select --' }).nth(1);
    await dropdown.click();

    console.log("Dropdown clicked!");

    // Select "QA Engineer" from the dropdown
    await page.locator("//div[@role='listbox']//span[contains(text(),'QA Engineer')]").click();

    // Wait for some time to observe the selection
    await page.waitForTimeout(5000);
});
