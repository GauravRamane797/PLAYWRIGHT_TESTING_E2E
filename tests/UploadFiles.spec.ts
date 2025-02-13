import { test, expect } from '@playwright/test';

test('Keyboard typing test', async ({ page }) => {

    await page.goto('https://www.foundit.in/upload')

    await page.waitForSelector(".mqfihd-upload")

    await page.locator('.mqfihd-upload').click("D:/Playwright/PLAYWRIGHT/tests/gauravFile1.pdf")

    await page.locator('#file-upload').setInputFiles("tests")
    
    await page.waitForTimeout(3000)
});

test.only('Multiple Files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    // Upload multiple files
    await page.locator("//input[@id='filesToUpload']").setInputFiles([
        'D:/Playwright/PLAYWRIGHT/tests/gauravFile1.pdf',
        'D:/Playwright/PLAYWRIGHT/tests/gauravFile2.pdf'
    ]);

    // Wait for file upload confirmation
    await page.waitForTimeout(3000);

    // Verify the uploaded files appear in the list
    await expect(page.locator("//ul[@id='fileList']/li")).toHaveText([
        "gauravFile1.pdf",
        "gauravFile2.pdf"
    ]);

    // Remove files by resetting the input
    await page.locator("//input[@id='filesToUpload']").setInputFiles([]);
    await page.waitForTimeout(3000);

    // Verify files are removed
    await expect(page.locator("//ul[@id='fileList']")).toHaveText("No Files Selected");
});