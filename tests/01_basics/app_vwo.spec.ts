import test, { expect } from "@playwright/test";

test("verify the gmail incorect email",async({page})=>{
await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
await page.getByRole("textbox",({'name':"email"})).pressSequentially("ravikantbadola@gmail.com",{delay:100});
 await page.locator('#page-free-trial-step1-cu-gdpr-consent-checkbox').check();
    // Click on Create a Free Trial Account button
    await page.locator("//button[text()='Create a Free Trial Account']").click();
    // Validate the Error message for invalid email entered
    let errormsg = page.getByText("gmail.com doesn\'t look like a business domain. Please use your business email.");
    await expect(errormsg).toContainText("gmail.com doesn\'t look like a business domain. Please use your business email.");

})