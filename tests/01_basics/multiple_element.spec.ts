import { Locator, test } from '@playwright/test';

test.describe('Multiple Element Handling', () => {

  test('basic test - verify page title', async ({ page }) => {

    await page.goto(
      'https://app.thetestingacademy.com/playwright/multiple_element_filter'
    );

    const rightPanelLinktext: string[] =
      await page.locator('a.list-group-item').allInnerTexts();
    for(const linktest of rightPanelLinktext){
        if(linktest==='My Account'){
        await page.getByText(linktest).first().click();
        }
    }

    const  rightpanellinks:Locator[] = await page.locator('a.list-group-item').all();
    for(const links of rightpanellinks){
console.log(await links.getAttribute("href"))
    }


  });

});