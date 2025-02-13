import { test, expect } from '@playwright/test';

test('Mouse Drag and Drop', async ({ page }) => {
    // Navigate to the drag-and-drop demo page
    await page.goto('http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html');

    // Corrected locators using CSS ID selectors
    const rome = await page.locator("#box6").first();  // ID selector for Rome
    const italy = await page.locator("#box106");  // ID selector for Italy


    // Approach 1
    // await rome.hover()
    await page.mouse.down();

    await italy.hover()
    await page.mouse.up();

    // Drag and Drop using Playwright's built-in function
    await rome.dragTo(italy)


    // WASHINGTON ----> US

    const washington = await page.locator("#box3").first()
    const usa = await page.locator("#box103")


    await washington.dragTo(usa)


    // Wait for 3 seconds to observe the effect (for debugging purposes)
    await page.waitForTimeout(3000);
});
