import { test, expect} from '@playwright/test'

test.beforeAll(()=>{
    console.log(
        "This is a test beforeAll Hooks"
    )
})
test.afterAll(()=>{
    console.log(
        "This is a test afterAll Hooks"
    )
})
test.beforeEach(()=>{
    console.log(
        "This is a test beforeEach Hooks"
    )
})
test.afterEach(()=>{
    console.log(
        "This is a test afterEach Hooks"
    )
})








test.describe.skip('Group1', () => {
    test('Test1', async ({ page }) => {
        console.log("this is test 1.....")
    })
    test('Test2', async ({ page }) => {
        console.log("this is test 2.....")
    })
})


test.describe('Group2', () => {
    test('Test3', async ({ page }) => {
        console.log("this is test 3.....")
    })
    test('Test4', async ({ page }) => {
        console.log("this is test 4.....")
    })
})