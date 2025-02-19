import {test, expect} from '@playwright/test'


// Page screenshots
test('page screenshot', async ({page})=>{
    await page.goto('https://demo.opencart.com.gr/')
    await page.screenshot({path: 'tests/screenshots/' + Date.now()+ 'screenshot.png'})
    
})


//Full Page ScreenShots
test('Full page screenshort', async ({page}) => {
    await page.goto('https://demo.opencart.com.gr/')
    await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'fullpage.png', fullPage:true})
  
});

test('Element screenshort', async ({page}) => {
    await page.goto('https://demo.opencart.com.gr/')
    await page.locator("//body/div[@id='common-home']/div[@class='row']/div[@id='content']/div[@class='row']/div[1]").screenshot({path: 'tests/screenshots/' + Date.now() + 'fullpage.png'})
   
});
