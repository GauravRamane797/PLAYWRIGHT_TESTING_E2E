import { test, expect } from '@playwright/test';

test('Mouse hover', async ({ page }) => {
    // Navigate to the OrangeHRM login page
    await page.goto('https://demo.opencart.com.gr/');

    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const PC= await page.locator("//a[normalize-space()='PC (0)']")
    const macbook= await page.locator("//a[normalize-space()='Mac (1)']")
    const showAll= await page.locator("//a[normalize-space()='Show All Desktops']")
    
    // mouse hover
    await desktop.hover()
    await PC.hover()
    await macbook.hover()
    await showAll.hover()

    await showAll.click()
    
    
    
    // Wait for some time to observe the selection
    await page.waitForTimeout(5000);
});
