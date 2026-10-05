import {test,Locator,expect} from "@playwright/test";

const URL = 'https://www.flipkart.com/search';

test.describe('SVG Element Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        await page.getByText('Price -- Low to High').click();

        await page.waitForTimeout(5000);

        const cheapestProdName: string | null = await page.locator('//div[contains(@data-id,"CPU")]/div/a[contains(@title,"Apple Mac Mini (MXNF2HN/A)")]').textContent();

        const cheapestProdPrice: string |null = await page.getByText('₹74,900').textContent();

        console.log('Cheapest Mac Mini Available:');

        console.log(`Product: ${cheapestProdName}`);

        console.log(`Price: ${cheapestProdPrice}`);








    })


});