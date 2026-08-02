import { test } from "@playwright/test";

test.describe("Multiple elements handling",()=>{

test("basic test",async({page})=>{

await page.goto("https://courses.thetestingacademy.com/playwright/multiple_element_filter")

const rightpanelLinksTexts : string[] = await page.locator('a.list-group-item').allInnerTexts();
console.log(rightpanelLinksTexts.length)

for(const linktext of rightpanelLinksTexts){
    if(linktext == 'My Account'){
        await page.getByText(linktext).first().click();
        break;
    }
}
const rightpanelLinks  = await page.locator('a.list-group-item').all()
for(const link of rightpanelLinks){
    console.log(await link.getAttribute("href"));
}


})

})