import { test } from "@playwright/test";

const loginData = require("../../test-data/login.json");

for (const data of loginData) {

    test(`Login test - ${data.username}`, async ({ page }) => {

        await page.goto(
            "https://app.thetestingacademy.com/playwright/multiple_element_filter"
        );

        await page.locator("#email").fill(data.username);
        await page.locator("#password").fill(data.password);

        await page.getByTestId("login-button").click();

    });

}