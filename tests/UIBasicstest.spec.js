import { test ,expect} from '@playwright/test';

test("Browser Context Playwright test", async ({ browser }) => {
    // Create a new browser context
    const context = await browser.newContext(); 
    const page = await context.newPage(); 
    
    // Navigate to Google
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    
    // Close the browser context after the test
    await context.close();
});

test("Page Playwright test", async ({ page }) => {

    // Navigate to Google
    await page.goto('https://google.com') 
    
    console.log(await page.title())
    await expect(page).toHaveTitle("Google")

});

test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})
