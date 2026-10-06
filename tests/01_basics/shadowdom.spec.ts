import {test} from "@playwright/test";

test("testing shadow dom",async({page})=>{
await page.goto("https://selectorshub.com/xpath-practice-page/");
let shadow =await page.locator("#userName");
await shadow.locator("#kils").fill("ravikantbadola");
await page.locator("#pizza").fill("dominoz");
await page.keyboard.press('Tab');
        await page.keyboard.type('Concept Test - Hidden shadow Dom');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('PSW@123456')

        await page.getByText('Click to practice iframe inside shadow dom scenario').click();

        // const text = await page.evaluate(() => document.querySelector(‘my-element’).shadowRoot.querySelector(‘input’).value);

        await page.waitForTimeout(2000);
})