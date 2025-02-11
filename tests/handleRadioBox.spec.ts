import {test, expect} from "@playwright/test"

test("handle checkboxes", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");

    // single checkbox
    await page.locator("//input[@id='monday'][@type='checkbox']").check()
    // await page.check("//input[@id='checkbox'] and [@type='checkbox']")
    
    expect(await page.locator("//input[@id='monday'][@type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='monday'][@type='checkbox']").toBeChecked());
    expect(await page.locator("//input[@id='sunday'][@type='checkbox']").toBeChecked()).toBeTruthy();




    // Multiple checkboxes
    const checkboxeLocators = [
        "//input[@id='sunday'][@type='checkbox']",
        "//input[@id='monday'][@type='checkbox']",
        "//input[@id='saturday'][@type='checkbox']",
    ]

    for(const locator of checkboxeLocators) // select multiple checkboxes
    {
        await page.locator(locator).check()
    }

    for(const locator of checkboxeLocators) // Unselect multiple checkboxes which are already selected
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
    }






    await page.waitForTimeout(5000) 
})