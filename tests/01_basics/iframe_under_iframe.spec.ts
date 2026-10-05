import { test, expect } from '@playwright/test';

test('Basic Web Test Verify Page Title', async ({ page }) => {

  await page.goto('https://selectorshub.com/iframe-scenario/');

  const frame1 = page.locator('#pact1').first().contentFrame();

  const frame2 = frame1.locator('#pact2').first().contentFrame();

  const frame3 = frame2.locator('#pact3').first().contentFrame();

  await frame1.locator('#inp_val').fill('Ravi');

  await frame2.locator('#jex').fill('Badola');

  await frame3.locator('#glaf').fill('QA Engineer');

  const headerText = await frame1.locator('h3').textContent();

  console.log(headerText);
});