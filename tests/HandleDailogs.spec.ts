const {test ,expect}  = require ('@playwright/test')

test('Alert with OK',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')


    // Enableing alert hadnling  // Dilaog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })


    await page.click('//button[@id="alertBtn"]');
    // await page.waitForTimeOut(5000);

})


test('Confirmation Dialod, Alert with OK and Cancel',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')


    // Enableing alert hadnling  // Dilaog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();       // Close by using OK button
        // await dialogs.dismiss()  // Close by using cancel
    })


    await page.click('//button[@id="confirmBtn"]');
    
    await expect(page.locator("#demo")).toHaveText("You pressed OK!")

    // await page.waitForTimeOut(5000);

})


test('Prompt Alert Enter a Name', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handling Prompt Dialog
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');  // Corrected event type
        expect(dialog.message()).toContain('Please enter your name:'); // Verify message
        await dialog.accept('Gaurav'); // Entering "Gaurav" instead of default
    });

    // Clicking the prompt button
    await page.click('//button[@id="promptBtn"]');

    // Verifying the text update
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Gaurav! How are you today?');
});