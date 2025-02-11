import { test, expect } from '@playwright/test';

test("test inputbox", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com")
    await expect (page.locator("#name")).toBeVisible();
    await expect (page.locator("#name")).toHaveValue("");
    await expect (page.locator("#name")).toBeEditable();
    await expect (page.locator("#name")).toBeEnabled();


    //await page.locator("//input[@id="name"]").fill("John")
    await page.fill("#name","Gaurav")
    await page.waitForTimeout(5000)  // pausing code

    
})