import { test, expect, chromium } from '@playwright/test';

test('Handle Multiple Pages and Windows', async () => {
    // Launch browser
    const browser = await chromium.launch();
    const context = await browser.newContext();

    // Open first page
    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    // Open second page
    const page2 = await context.newPage();
    await page2.goto("https://www.orangehrm.com/");
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM");

    // Open third page (new window)
    const pagePromise = context.waitForEvent('page'); // Wait for a new page event
    await page1.evaluate(() => window.open('https://www.google.com')); // Open new window
    const newPage = await pagePromise; // Assign new window
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle(/Google/);

    // Get all open pages/windows
    const allPages = context.pages();
    console.log("Total Open Pages:", allPages.length);

    await browser.close();
});
