const { test, expect } = require('@playwright/test')

// ONLY

test.only('test1', async ({ page }) => {
    console.log(
        "This is a test 1"
    )
})

// SKIP

test('test2', async ({ page }) => {
    console.log(
        "This is a test 2"
    )
})


// BROWSER NAME

test('test3', async ({ page, browsername }) => {
    console.log(
        "This is a test 3"
    )
    if (browsername === "chromium") {
        test.skip()
    }
    if (browsername === "firefox") {
        test.skip()
    }
    if (browsername === "google") {
        test.skip()
    }
})


// Fixme 

test('test4', async ({ page }) => {
    test.Fixme()
    console.log(
        "This is a test 4"
    )
})

//FAIL

test('test5@sanity@reg', async ({ page }) => {
    test.fail()
    console.log(
        "This is a test 5"
    )
    expect(1).toBe(2);
})

test('test5@sanity@reg', async ({ page, browserName }) => {
    console.log(
        "This is a test 6"
    )
    if (browserName === "chromium") {
        test.FAIL()
    }

})

//SLOW
test('test5@sanity@reg',async({page,browserName})=>{
    test.slow()
    console.log(
        "This is a test 7"
    )
    await page.goto('https://www.demoblaze/index.html')
    
})