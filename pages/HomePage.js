class HomePage {
    constructor(page) {
        this.page = page;
        this.homeLink = 'a[href="index.html"]'; // Updated home link selector
        this.productLinks = '[class="hrefch"]';
    }

    async gotoHomePage() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async clickHomeLink() {
        await this.page.locator(this.homeLink).nth(0).click(); // Selecting the first home link
    }

    async selectProduct(productName) {
        const products = await this.page.locator(this.productLinks).all();
        for (let product of products) {
            const text = await product.textContent();
            if (text.includes(productName)) {
                await product.click();
                break;
            }
        }
    }
}

module.exports = HomePage;
