import {test, expect} from '@playwright/test';


test("bootstrap dropdown",async ({page})=>{

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator(".multiselect-selected-text").click();  //Click on the dropdown

    //1
    // const oprtions = await page.locator('ul>li lable input')
    // await expect(options).toHaveCount(11);

    //2
    // const options = await page.$$('ul>li lable input')
    // await expect(oprtions.length).toBe(11)

    //3
    const options = await page.$$('ul>li>label>input')
    for(let option of options)
    {
        const value = await option.textContent()
        console.log(value);
        if (value?.includes('Angular') || value?.includes('Java'))
        {
            await option.click();
        }
    }

    await page.waitForTimeout(5000) 
}) 