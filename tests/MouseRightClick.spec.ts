import { test, expect } from '@playwright/test';

test('Mouse Right Click Action', async ({ page }) => {
    // Navigate to the OrangeHRM login page
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button = await page.locator("//span[normalize-space()='right click me']")

    await button.click({button: 'right'})           // click on right side
    // await button.click({button:  'left'})           // click on left side        
    // await button.click({button:'middle'})           // click on middle side
    
    
    // Wait for some time to observe the selection
    await page.waitForTimeout(5000);
});
