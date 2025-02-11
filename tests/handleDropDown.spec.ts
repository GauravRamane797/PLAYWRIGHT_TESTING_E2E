const  {test , expect} = require("@playwright/test");

test("handle checkboxes", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");


    await page.locator("#country").selectOption({label:"India"});   //label visible text
    await page.locator("#country").selectOption("India");   // visible text
    await page.locator("#country").selectOption({value:"uk"});   //By Using value
    await page.locator("#country").selectOption({idex:1});   //By using index
    await page.selectOption("#country",'india');   //By text


    // Assertions 
    // 1) check number of options in dropdown - Approach1
    // const options = await page.locator("#country option")
    // await expect(options).toHaveCount(10)

    // 2) check number of oprtions in the dropdown - Approach2 
    // const options = await page.$$("#country option")
    // console.lgo("Number of options: ", options.length)
    // await expect(options).toHaveCount(10)

    //3) check presence of value in the dropdown - Approach1
    // const options = await page.locator("#country").textContent();
    // await expect(content.includes('india')).toBeTruthy();

    
    // 4) select option from dropdown using loop
    const options = await page.$$("#country option")
    
    for (const option of options){
        const text = await option.textContent()
        console.log("Option text: ", text)
        
        if (text.includes('india'))
            {
            await page.selectOption("#country",'india');
            break;

            }
    }

 

    
    


})