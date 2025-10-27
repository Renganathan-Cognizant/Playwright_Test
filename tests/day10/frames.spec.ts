import {test,expect} from '@playwright/test';

test('frames approach1', async ({page})=>{
    await page.goto("https://letcode.in/frame");

    //entire page frames
    const allframes = page.frames(); //returns an array
    console.log("No. of frames: " + allframes.length)

    const myFrame = page.frame("firstFr") // frame access

    await myFrame?.fill("input[name='fname']", "Playwright")
    await myFrame?.fill("input[name='lname']", "Batch")

    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

    await page.waitForTimeout(3000);
})

test('frames approach2', async ({page})=>{
    await page.goto("https://letcode.in/frame");

    const allframes = page.frames(); //returns an array
    console.log("No. of frames: " + allframes.length)

    const frame = page.frameLocator('#firstFr')
    await frame.locator("input[name='fname']").fill("Playwright");
    await frame.locator("input[name='lname']").fill("frameapproach2");

    await page.waitForTimeout(2000);
})

test('Nestedframes', async ({page})=>{
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames(); //returns an array
    console.log("No. of frames: " + allframes.length)

    const frame = page.frameLocator('#firstFr')
    await frame.locator("input[name='fname']").fill("Playwright");
    await frame.locator("input[name='lname']").fill("frameapproach2");

    const innerFrame = frame.frameLocator("iframe[src='innerframe']")
    //await innerFrame.locator("input[name='email']").waitFor()
    
    await innerFrame.locator("input[name='email']").fill("playwright@gmail.com");

    await page.waitForTimeout(2000);
})

test('Switch between frames', async ({page})=>{
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames(); //returns an array
    console.log("No. of frames: " + allframes.length)

    const frame = page.frameLocator('#firstFr')
    await frame.locator("input[name='fname']").fill("Playwright");
    await frame.locator("input[name='lname']").fill("frameapproach2");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("explore.playwright@gmail.com")

    await page.waitForTimeout(1000);
    await frame.locator("input[name='fname']").fill("letcode");

    await page.waitForTimeout(2000);
})