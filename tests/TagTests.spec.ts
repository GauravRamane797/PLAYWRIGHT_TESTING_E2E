const {test, expect} =require('@playwright/test')

test('test1@sanity',async({page})=>{
    console.log(
        "This is a test 1"
    )
})
test('test2@sanity',async({page})=>{
    console.log(
        "This is a test 2"
    )
})
test('test3@reg',async({page})=>{
    console.log(
        "This is a test 3"
    )
})
test('test4@reg',async({page})=>{
    console.log(
        "This is a test 4"
    )
})
test('test5@sanity@reg',async({page})=>{
    console.log(
        "This is a test 5"
    )
})
