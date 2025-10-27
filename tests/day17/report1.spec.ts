import {chromium, test} from '@playwright/test';

test("shadow DOM", async ({page}) => {

    await page.goto ('https://books-pwakit.appspot.com/')
    await page.locator('#input').fill('testing books')
})

test('frames approach2', async ({page})=>{
    await page.goto("https://letcode.in/frame");

    const allframes = page.frames(); //returns an array
    console.log("No. of frames: " + allframes.length)

    const frame = page.frameLocator('#firstFr')
    await frame.locator("input[name='fname']").fill("Playwright");
    await frame.locator("input[name='lname']").fill("frameapproach2");

    await page.waitForTimeout(5000);
})