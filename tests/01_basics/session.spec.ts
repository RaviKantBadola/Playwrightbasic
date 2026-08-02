import { chromium } from "playwright";

async function saveSession() {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });

  // Create a new browser context
  const context = await browser.newContext();

  // Create a new page
  const page = await context.newPage();

  // Open the login page
  await page.goto("https://app.vwo.com/#login");

  // Optional wait
  await page.waitForTimeout(2000);

  // Enter login credentials
  await page.fill("#login-username", "opg73@singleuseemail.site");
  await page.fill("#login-password", "Wingify@4321");

  await page.waitForTimeout(1500);

  // Click the Login button
  await page.click("#js-login-btn");

  // Wait for successful login
  await page.waitForURL(/#\/(dashboard|home)/, {
    timeout: 15000,
  });

  // Wait a little to ensure cookies/local storage are saved
  await page.waitForTimeout(3000);

  // Save the session
  await context.storageState({
    path: "./auth/user-session.json",
  });

  console.log("✅ Session saved successfully!");

  await browser.close();
}

saveSession()