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

    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'laptop')
    await selectProduct(rows, page, 'tablet')
    await selectProduct(rows, page, 'Wireless Earbuds')

    // 4) print all product details using looping statement

    // for (let i = 0; i < await rows.count(); i++) {
    //     const row = await rows.nth(i);
    //     const tds = await row.locator('td');
    //     console.log(tds);

    //     for(let j=0 ; j < await columns.count()-1; j++){

    //         console.log(await tds.nth(j).textContent())
    //     }
    //     }

    // 5) read data from all the pages in the table
    const pages = await page.locator('.pagination li a');
    console.log('Number of pages in the table:', await pages.count())

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();

        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = await rows.nth(i);
            const tds = await row.locator('td');
            console.log(tds);

            for (let j = 0; j < await columns.count() - 1; j++) {

                console.log(await tds.nth(j).textContent())
            }
        }
    }

    await page.waitForTimeout(5000)
});

// using async function choose the multiple product
async function selectProduct(rows, page, name) {


    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()
}







// ***************************************************

// second method is ---->


// const { test, expect } = require('@playwright/test');

// test('handling table with simple for loop', async ({ page }) => {
//     await page.goto('https://testautomationpractice.blogspot.com');
//     await page.waitForSelector('#productTable');

//     const rows = await page.locator('#productTable tbody tr');
//     console.log('Number of rows:', await rows.count());

//     // Select specific products using a for loop
//     const productsToSelect = ['Smartphone', 'Laptop', 'Tablet', 'Wireless Earbuds'];
    
//     for (let i = 0; i < await rows.count(); i++) {
//         const row = await rows.nth(i);
//         const text = await row.textContent();
        
//         for (const product of productsToSelect) {
//             if (text.includes(product)) {
//                 await row.locator('input').check();
//                 console.log(`Selected: ${product}`);
//             }
//         }
//     }

//     // Read data from all pages in the table
//     const pages = await page.locator('.pagination li a');
//     console.log('Number of pages in the table:', await pages.count());

//     for (let p = 0; p < await pages.count(); p++) {
//         if (p > 0) {
//             await pages.nth(p).click();
//         }
//         for (let i = 0; i < await rows.count(); i++) {
//             const row = await rows.nth(i);
//             const tds = await row.locator('td');
            
//             for (let col = 0; col < await tds.count() - 1; col++) {
//                 console.log(await tds.nth(col).textContent());
//             }
//         }
//     }

//     await page.waitForTimeout(3000);
// });
