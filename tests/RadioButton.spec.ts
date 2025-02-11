const {test, expect}  =require('@playwright/test');

test ("Check Radio Buttton", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com")

// Radio Button
await page.locator("//input [@value='male']").check();
// await page.check("//input [@value='male']")

await expect(page.locator("//input [@value='male']")).toBeChecked()
await expect(page.locator("//input [@value='male']").isChecked()).toBeTruthy()
// await expect(page.locator("//input [@value='female']").isChecked()).toBeFalsy()

// Radio Button
await page.locator("//input [@value='female']").check();
// await page.check("//input [@value='female']")

await expect(page.locator("//input [@value='female']")).toBeChecked()
await expect(page.locator("//input [@value='female']").isChecked()).toBeTruthy()
await page.waitForTimeout(5000)   // Pausing code

}) 