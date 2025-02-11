import {test, expect} from "@playwright/test"

test("Handle dropdowns", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");

    // Select multiple options from multi select dropdown
    // await page.selectOption ("#colors, ['Blue', 'Red', 'yellow']")

    // Assertions
    // 1) check number of options in dropdown
    // const options = await page.$$("#colors option");
    // expect(options.length).toHaveCount('5');
    // await expect(options).toHaveCount(5);

    //2) check number of options in dropdown using JS array
    const optionsJS = await page.$$('#colors option')
    console.log("Number of options", optionsJS.length)
    expect(optionsJS.length).toBe(7);

    //3) check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
    // await expect(content.includes('Black')).toBeTruthy();
    await expect(content.includes("black")).toBeFalsy()


    await page.waitForTimeout(6000)

})