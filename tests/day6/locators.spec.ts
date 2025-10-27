import {chromium, test} from '@playwright/test';

test('Built-in locators', async()=>{
    //Launches a new chromium browser instance
    const browser = await chromium.launch();

    //Creates a new browser context (like a fresh browser profile)
    const context = await browser.newContext();

    //opens a new page or tab in the browser
    const page = await context.newPage();

    //Navigates to the orangeHRM demo login page
    await page.goto("https://opensource-demo.orangehrmlive.com/");

    //Fills the username inputfield using its placeholder text
    await page.getByPlaceholder("username").fill("Admin");

    ////Fills the username inputfield using its placeholder text
    await page.getByPlaceholder("password").fill("admin123");

    //Clicks the login button using its ARIA role and accessible name
    await page.getByRole('button',{name:'Login'}).click();

    //This just wait for 5 secons for next page to gets loaded
    await page.waitForTimeout(5000);

})

test('CSS', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('[name="username"]').fill("Admin");
    await page.locator('[type="password"]').fill("admin123");
    await page.locator("button").click();
    await page.waitForTimeout(5000)

})

test('xpath',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator("//input[@name='username']").fill("Admin");
    await page.pause();
    await page.locator("//input[@type='password']").fill("admin123");
    await page.locator("//button").click();
    await page.waitForTimeout(5000)

})