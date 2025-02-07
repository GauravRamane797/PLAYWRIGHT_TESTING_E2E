import { test, expect } from '@playwright/test';

test("locateMultipleElement", async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // const links = await page.$$('a');

    // for (const link of links) 
    // {  // Corrected from "for...in"
    //     const linkText = await link.textContent();  // Corrected method call
    //     console.log(linkText);
    // }


// Locate all the products displayed on home page
await page.waitForSelector("//div[@id='tbodyid']//div/h4/a");

    const AllProductsName = await page.$$("//div[@id='tbodyid']//div/h4/a");

    for(const products of AllProductsName)
    {
        const productsName = await products.textContent()
        console.log(productsName)
    }
});
