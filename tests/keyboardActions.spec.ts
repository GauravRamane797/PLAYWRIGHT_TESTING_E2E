import { test, expect } from '@playwright/test';

test('Keyboard typing test', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare'); // Open the website

    const searchBox = page.locator('[name="text1"]'); // First input box
    const pasteBox = page.locator("[name='text2']"); // Second input box

    await searchBox.click();
    await page.keyboard.type('Playwright Automation'); // Simulate typing
    await searchBox.click();
    await page.keyboard.press("Control+A"); // Use 'Control' instead of 'Ctrl'
    await page.keyboard.press("Control+C");

    await pasteBox.click();
    await page.keyboard.press("Control+V");
    await page.locator("//input[@id='simple']").check()
    await page.locator("#recaptcha").click()

    // await page.keyboard.press('Enter'); // Press Enter key

    // ✅ Corrected Assertion
    await expect(pasteBox).toHaveValue('Playwright Automation');
});
