const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Locate the frame containing the input fields
    // Locate input fields inside frames and fill them

    const frame3 = await page.frameLocator("frame[src='frame_3.html']");
    // await frame3.locator("input[name='mytext3']").fill("Vaibhav");

    // Nested Frame
    const childFrames = await frame3.childFrames()
    await childFrames[0].locator("//span[normalize-space()='Hi, I am the UI.Vision IDE']").check();
     

    await page.waitForTimeout(5000)

});
