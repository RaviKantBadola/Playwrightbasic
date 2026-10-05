import { test } from "@playwright/test";

test('Basic Web Test Verify Page Title', async ({ page }) => {

  await page.goto('https://app.thetestingacademy.com/playwright/frames/');

  const vehicleFrame = page.frameLocator('#frame-one');

  await vehicleFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');
  await vehicleFrame.locator('#RESULT_TextField-2').fill('ravikantbadola');
  await vehicleFrame.locator('#RESULT_TextField-3').fill('2012');
 await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');
 await vehicleFrame.locator('#vehicle-submit').click();
 


});