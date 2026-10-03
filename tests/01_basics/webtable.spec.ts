import { test } from "@playwright/test";

test.describe("web table tests",()=>{

    test("verifying the webtable",async({page})=>{
await page.goto('https://app.thetestingacademy.com/playwright/webtable'); 

await page.locator("#employee-search").fill("Kabir.Khan");
await page.locator("tr:has-text('Kabir.Khan')")
  .locator("td")
  .first()
  .click();
await page.waitForTimeout(5000);

//await page. locator(

//"//td[text()='Aarav. Sharma']/preceding-sibling::td/input[@type='checkbox']" ).click();

//await page.locator("tr:has(td:text('Rohan.Mehta'))").
//locator("td")
//.first()
//.click();

//await page.locator("tr:has(td:text('Priya.Nair')").locator("td").first().click();

//

    })

})