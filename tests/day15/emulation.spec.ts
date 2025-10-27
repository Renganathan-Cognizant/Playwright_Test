import {test,chromium,devices} from '@playwright/test';

test.only('device emulation', async()=>{
    const mobile = devices ['Galaxy S5']
    const browser = await chromium.launch();
    const context = await browser.newContext({...mobile});
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.waitForTimeout(3000)
})

test('device emulation 2', async({page})=>{
    const mobile = devices ['Desktop Firefox HiDPI']
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.waitForTimeout(5000)

})