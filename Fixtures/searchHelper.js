export async function findProduct(page, productName) {
    const productSelector = `[title="${productName}"]`;

    while (true) {
        
        const productExists = await page.locator(productSelector).count() > 0;

        if (productExists) {
            // Click on the product
            await page.locator(productSelector).click();
            break;
        } else {
            // If the product is not found
            
            throw new Error(`Product "${productName}" not found.`);

        }
    }
}