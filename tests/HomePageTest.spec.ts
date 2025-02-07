const { test , expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = await page.title(); // Awaiting the title
    console.log(`Page title is: ${pageTitle}`);

    await expect(page).toHaveTitle("STORE"); // Correct title

    const pageURL = await page.url(); // Awaiting the URL
    console.log('Page URL is:', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
});
