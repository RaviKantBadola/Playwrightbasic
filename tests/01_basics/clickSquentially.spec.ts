import {test} from "@playwright/test"

test("learning css salector",async({page,context})=>{
await page.goto("https://awesomeqa.com/practice.html");
//await page.getByRole("textbox",{name:"firstname"}).fill('ravi');
await page.locator('[name="firstname"]').pressSequentially("ravikantbadola",{delay:200})

 await page.waitForTimeout(5000)
 await page.goto("https://app.vwo.com/login");
 //await page.goBack();
 //await page.waitForTimeout(5000)

 let cookies =  await context.cookies();
 console.log("totalcookies",cookies.length);



})