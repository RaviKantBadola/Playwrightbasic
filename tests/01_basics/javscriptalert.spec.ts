import {test} from "@playwright/test"


test.describe("for aleart ",()=>{

test("checking alert multi type",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.getByText('Click for JS Alert',{exact:true}).click();
page.once('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});






})





})