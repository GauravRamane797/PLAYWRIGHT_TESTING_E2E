const { test, expect } = require('@playwright/test');

test('handling table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    // Wait for the table to be visible
    await page.waitForSelector('#productTable');

    // Locate table
    const table = await page.locator('#productTable');

    // Get columns
    const columns = await table.locator('thead tr th');
    console.log('Number of columns:', await columns.count());

    // Get rows
    const rows = await table.locator('tbody tr');
    console.log('Number of rows:', await rows.count());

    // Assertions
    expect(await columns.count()).toBe(4); // Check the actual number of columns
    expect(await rows.count()).toBe(5);






    //2) select check box for project 4

    // const matchRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: "Smartwatch" 
    // })
    // matchRow.locator("input").check()



    // 3) select multiple products by re-usable function
    
    await selectProduct(rows,page,'Smartphone')
    await selectProduct(rows,page,'laptop')
    await selectProduct(rows,page,'tablet')
    await selectProduct(rows,page,'Wireless Earbuds')


    await page.waitForTimeout(5000)
});


async function selectProduct(rows, page, name){

    
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name 
    })
    await matchedRow.locator('input').check()
}