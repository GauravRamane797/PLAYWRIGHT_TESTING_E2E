const { test, expect, request } = require('@playwright/test');

const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
let token;

test.beforeAll(async () => {
   // login to the application
   const apiContext = await request.newContext();
   const loginResponse = await apiContext.post("https://rahulshettyacademy.com/client/auth/login", {
      data: loginPayLoad,
      headers: {
         "Content-Type": "application/json"
      }
   });

   expect(loginResponse.ok()).toBeTruthy();
   const responseJson = await loginResponse.json();
   token = responseJson.token;
   console.log("Auth Token:", token);
});

test('@Client App login', async ({ page }) => {

   // open the client app
   

   
   // Login with token (if applicable)
   await page.evaluate((token) => {
      localStorage.setItem('authToken', token);
   }, token);
   
   // Find products
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   const titles = await page.locator(".card-body b").allTextContents();
   console.log("Product Titles:", titles);

   // Add to cart
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }

   // Navigate to cart and checkout
   await page.locator("[routerlink*='cart']").click();
   const isProductVisible = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(isProductVisible).toBeTruthy();

   await page.locator("text=Checkout").click();
   await page.locator("[placeholder*='Country']").type("ind");

   // Select India from dropdown
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

   await expect(page.locator(".user__name [type='text']").first()).toHaveText("anshika@gmail.com");
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log("Order ID:", orderId);
});
