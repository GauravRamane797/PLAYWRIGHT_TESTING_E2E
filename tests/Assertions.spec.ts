import {test, expect} from '@playwright/test';

test("Assertions",async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");


    //expect(page).toHaveURL()      Page has URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    //expect(page).toHaveTitle()      Page has title
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    // expect(locator).toBeVisible()   Locator has visible or not //

    // await expect(page.locator(".header-logo")).toBeVisible()

    const logoElement = await page.locator(".header-logo")
    await expect(logoElement).toBeVisible()

    // expect(locator).toBeEnabled()   Control is enabled
    const searchStoreBox = await page.locator("#small-searchterms")
    await expect(searchStoreBox).toBeEnabled()

    // expect(locator).toBeChecked()     Radio/Checkbox is checked

    // radio button
    const mailRadioButton = await page.locator("#gender-male")
    await mailRadioButton.click()
    await expect(mailRadioButton).toBeChecked()

    // check box
    const newsLetterCheckbox = await page.locator("//input[@id='Newsletter']");
    await expect(newsLetterCheckbox).toBeChecked()

    // expect(locator).toHaveAttribute()   Element has attribute
    const categoriesDropDown = await page.locator("#register-button")
    await categoriesDropDown.click()
    await expect(categoriesDropDown).toHaveAttribute('type','submit')


    //

})