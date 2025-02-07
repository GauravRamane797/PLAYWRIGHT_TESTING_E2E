// const { test, expect} = require('@playwright/test');
import {test,expect} from '@playwright/test';
test('locators',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

//click on login button - property

   // await page.locator('id=login2').click()
   await page.click('#login2')

//provide username -- css 3 Type
   
    // await page.locator('#loginusername').fill('Gaurav')
    await page.fill('#loginusername','Gaurav')
    // await page.type('#loginusername',"Gaurav")

// provide password -- css 3 Type

    // await page.locator('#loginpassword').fill('Gaurav@797')
    await page.fill('#loginpassword','Gaurav@797')
    // await page.type('#loginusername',"Gaurav@797")


// Click on login button 

    // await page.locator('#loginbutton').click()
    // await page.click('id=loginbutton')
    await page.locator("//button[contains(text(), 'Log in')]").click();

// Verify logout link presence
    
    // const logoutlink = await page.locator("//a[contains(text(), 'Logout')]")
    // await expect(logoutlink).toBeVisible();
    // await expect(page.locator("//button[contains(text(), 'Logout')]")).toBeVisible();

    await page.close()
})