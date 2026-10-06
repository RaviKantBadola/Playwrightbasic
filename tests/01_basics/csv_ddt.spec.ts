import { test } from "@playwright/test";
import { readCSV } from "../../test-data/csvReader";

const loginData = readCSV("../test-data/register.csv");

console.log("LOGIN DATA:", loginData);

for (const data of loginData) {

    test(`Login test - ${data.firstName}`, async ({ page }) => {

        await page.goto(
            "https://app.thetestingacademy.com/playwright/multiple_element_filter"
        );

        await page.locator("#email").fill(data.firstName);
        await page.locator("#password").fill(data.password);

        await page.getByTestId("login-button").click();

    });

}