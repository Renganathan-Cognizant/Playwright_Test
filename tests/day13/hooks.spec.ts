import{test,chromium,Page,Browser,BrowserContext} from '@playwright/test';

let browser:Browser;
let context:BrowserContext;
let page:Page;

test.beforeAll('Before all test',async()=>{
    browser = await chromium.launch({headless:false});
    context = await browser.newContext();
    page=await context.newPage();
    console.log("------------------Before all test-----------------")
})

test.beforeEach("Before each test",async()=>{
    console.log("------------------Before each test-----------------")
    await page.goto("https://www.saucedemo.com/v1/")
    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
})

test("Test 1", async()=>{
    console.log("------------------ Executing Test 1 -----------------")
    await page.locator('//*[@class="inventory_item"]')
     .filter({hasText:'Sauce Labs Backpack'})
     .getByRole("button")
     .click();
    })

test("Test2",async()=>{
    console.log("------------------ Executing Test 2 -----------------")
    await page.locator(".bm-burger-button").isVisible();
})

test.afterEach("After Each Test",async()=>{
    console.log("------------------After each test-----------------")
    await page.waitForSelector(".bm-burger-button")
    await page.locator(".bm-burger-button").click();
    await page.click("#logout_sidebar_link")
})

test.afterAll("After all test",async()=>{
    console.log("------------------After All test-----------------")
    browser.close();
})