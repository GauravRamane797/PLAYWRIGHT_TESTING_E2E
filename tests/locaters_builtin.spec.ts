// const {test , expect } = require('@playwright/test')
import { test, expect } from '@playwright/test';

test('Built-inLocators', async({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Locate the logo by alt text
    const logo = await page.getByAltText('company-branding')
    
    // Verify if the logo is visible
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() - to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //page.getByRole() - to locate can element by its role.
    await page.getByRole('button', { name: 'Login'} ).click()

    //page.getByText () - to locate by text content

    // const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    // await expect( page.getByText(name)).toBeVisible()
    await expect(await page.getByText(name)).toBeVisible();

});



