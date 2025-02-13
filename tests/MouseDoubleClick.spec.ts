import exp from "constants"

const {test, expect} = require('@playwright/test')

test ('Mouse Double Click', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const btnCopy =await page.locator('[ondblclick="myFunction1()"]')

    // Wait for the button to be visible and clickable
    await btnCopy.waitFor({ state: 'visible' });

    // Perform double click action
    await btnCopy.dblclick();

    const field2 = await page.locator("[id='field2']")

    await expect(field2).toHaveValue("Hello World!")

    await page.waitForTimeout(5000)
})