const { test, expect } = require('@playwright/test')

test("Date Picker", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com')

    //   await page.fill('//input[@id="datepicker"]',"06/12/2023")

    // date picker
    const year = "2025"
    const month = "March"
    const date = "20"


    // const year = "2023"
    // const month = "January"
    // const date = "15"

    await page.click('#datepicker')   // opens calender

    while (true) 
    {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if (currentYear == year && currentMonth == month) {
            break;
        }
        await page.locator('[title="Next"]').click()  //next
        // await page.locator('[title="Prev"]').click()    //previous
    }   
    // const dates = await page.$$("//a[@class='usi-state-default']")


    // date selection using loop
    // for(const dt of dates)
    // {

    //     if (await dt.textContent()== date)
    //     {
    //         await dt.click();
    //         break;
    //     }

    // }


// Date selection === without looping 

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)






    await page.waitForTimeout(5000)
    
})


















/// Its my functionality using in playwright test


// const { test, expect } = require('@playwright/test')

// test("Date Picker", async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com')

//     //   await page.fill('//input[@id="datepicker"]',"06/12/2023")

//     // date picker for next
//     const year = "2024"
//     const month = "March"
//     const Date = "20"


//     // date picker for previous
//     const year = "2022"
//     const month = "January"
//     const Date = "29"

//     await page.click('#datepicker')   // opens calender

//     while (true) {
//         const currentYear = await page.locator('span.ui-datepicker-year').textContent()
//         const currentMonth = await page.locator('.ui-datepicker-month').textContent()
//         const Dates = await page.$$('td > a')

//         for (const date of Dates) {
//             const dateText = await date.textContent()
//             if (dateText === Date && currentMonth === month && currentYear === year) {
//                 await page.locator('[title="Next"]').click() //next
//                 await page.locator('[title="Pre"]').click() //previous
//                 await date.click()
                
//             }
//         }
//         break;
//     }
    
//     await page.waitForTimeout(5000)
// }


//     )