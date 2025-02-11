const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Find all frames on the page
    const allFrames = page.frames();
    console.log("Number of frames:", allFrames.length); // Debugging info

    // Locate the frame containing the input fields
    // Locate input fields inside frames and fill them


    const frame1 = page.frameLocator("frame[src='frame_1.html']");
    await frame1.fill("input[name='mytext1']","Gaurav");

    const frame2 = page.frameLocator("frame[src='frame_2.html']");
    await frame2.fill("input[name='mytext2']","Bhagavan");

    const frame3 = page.frameLocator("frame[src='frame_3.html']");
    await frame3.fill("input[name='mytext3']","Vaibhav");

    const frame4 = page.frameLocator("frame[src='frame_4.html']");
    await frame4.fill("input[name='mytext4']","sumit");

    const frame5 = page.frameLocator("frame[src='frame_5.html']");
    await frame5.fill("input[name='mytext5']","akash");

    await page.waitForTimeout(5000)

});
