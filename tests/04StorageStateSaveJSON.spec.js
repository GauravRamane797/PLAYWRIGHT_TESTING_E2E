const { test, expect } = require('@playwright/test');

let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    
    await page.waitForLoadState('networkidle');
    
    // Save session for reuse
    await context.storageState({ path: "state.json" });
    webContext=await browser.newContext({storageState:"state.json"})
});

test('@Client App login', async () => {
    const email = "anshika@gmail.com";
    const productName = 'ZARA COAT 3';
    // Verify product list
    
    const page = await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
    
    const products = page.locator(".card-body");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log("Product Titles:", titles);

    // Add product to cart
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    // Proceed to cart and checkout
    await page.locator("[routerlink*='cart']").click();
    // expect(await page.locator("h3:has-text('ZARA COAT 3')").isVisible()).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").type("ind");

    // Select country
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text.trim() === "India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

    // Verify user details before placing the order
    await expect(page.locator("[class='user__name mt-5'] > input")).toHaveValue(email);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");

    // Capture and print order ID
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Order ID:", orderId);
});
