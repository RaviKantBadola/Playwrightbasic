import {test} from "@playwright/test"

test.describe("filling the qa form",()=>{
test("filling the acutal form",async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/tables/practice");
await page.locator("#first-name").fill("Ravi");
await page.locator("#last-name").fill("Badola")
await page.getByTestId("gender-male").check();
//await page.getByTestId("years-experience").click();
await page.getByTestId("years-experience").selectOption('2');
await page.locator('#profile-date').fill('1998-09-06');
await page.getByTestId("profession-automation").click();
await page.getByTestId("tool-selenium").click();
await page.getByTestId("continent-asia").check();
await page.getByTestId("upload-image").setInputFiles('/Users/ravibadola/Downloads/4e9854c4-7602-457d-9d22-a353c0a8df34.png');
await page.locator("#profile-submit").click()

})

})