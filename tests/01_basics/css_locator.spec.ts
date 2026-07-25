import {test} from "@playwright/test"

test("learning css salector",async({page})=>{
await page.goto("https://awesomeqa.com/css/");
const allSpans = page.locator("div.first>span");
const count = await allSpans.count();
console.log(count)

const span1 = await allSpans.first().textContent();
const span2 = await allSpans.nth(1).textContent();
const span3 = await allSpans.nth(2).textContent();
const span4 = await allSpans.nth(4).textContent();
const spanLast = await allSpans.last().textContent();

console.log("span1",span1)
console.log("span2",span2)
console.log("span3",span3)
console.log("span4",span4)
console.log("span4",spanLast)


})