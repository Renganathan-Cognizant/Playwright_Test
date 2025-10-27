import {test} from '@playwright/test';

test("Login test@UI",async({page})=>{
    
    await page.goto("https://www.saucedemo.com/v1/")
    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
})

//tagging as additional object
test("Logout", {tag:"@Smoke"},async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    await page.waitForSelector(".bm-burger-button")
    await page.locator(".bm-burger-button").click();
    await page.click("#logout_sidebar_link")
})

test.describe("orangehrm describe tagging @sanity",async()=>{

    test("Leave function", {tag:["@Smoke","@API"]},async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/");
        await page.getByPlaceholder("username").fill("Admin");
        await page.getByPlaceholder("password").fill("admin123");
        await page.getByRole('button',{name:'Login'}).click();
        await page.getByRole('listitem').filter({hasText:'Leave'}).click();
    })

    test("PIM function @API",async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/");
        await page.getByPlaceholder("username").fill("Admin");
        await page.getByPlaceholder("password").fill("admin123");
        await page.getByRole('button',{name:'Login'}).click();
        await page.getByRole('listitem').filter({hasText:'PIM'}).click();
    })
})

//Run test with specific tags
//npx playwright test filename --grep=@tag
//npx playwright test filename --grep-invert=@tag
//eitheror - npx playwright test filename --grep="@tag1|@tag2"
//logical AND - npx playwright test filename --grep="(?=.*@tag1)(?=.*@tag2)"