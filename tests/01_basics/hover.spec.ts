import {test,expect} from "@playwright/test";

test("checking hover action ",async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
await page.getByTestId("nav-add-ons").hover();
await page.getByTestId("test-id-Wifi").hover();
await page.keyboard.press("Escape");




})

test('verify right click functionality', async ({ page }) => {

    const right_click_url = 'https://app.thetestingacademy.com/playwright/widgets/context-menu';
    await page.goto(right_click_url);
    await page.getByTestId('ctx-target').click({ button: 'right' });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Copy' }).first().click();

});