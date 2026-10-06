import {test,expect} from "@playwright/test";
import { faker } from '@faker-js/faker';


test("checking for faker js",async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
await page.locator("#user-name").fill(faker.internet.email());
await page.locator("#password").fill(faker.internet.password());
await page.locator("#login-button").click();
await page.waitForTimeout(5000);
await expect(page.getByRole('alert')).toContainText("Epic sadface: Username and password do not match any user in this service");


})