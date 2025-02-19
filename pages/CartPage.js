class AddCartPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = ".btn.btn-success.btn-lg";
        this.cartLink = '#cartur';
    }

    async addToCart() {
        await this.page.locator(this.addToCartButton).click();
        await this.page.waitForTimeout(2000); // Wait for alert
        await this.page.on('dialog', async dialog =>{
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Product added')
            await dialog.accept();       // Close by using OK button
        })
    
    }

    async goToCart() {
        await this.page.locator(this.cartLink).click();
    }
}

module.exports = AddCartPage;
