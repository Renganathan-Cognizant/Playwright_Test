import{test,chromium,Page,Browser,BrowserContext} from '@playwright/test';

let browser:Browser;
let context:BrowserContext;
let page:Page;

test.beforeAll('Before all test',async()=>{//browser open
    browser = await chromium.launch({headless:false});
    context = await browser.newContext();
    page=await context.newPage();
    console.log("------------------Before all test-----------------")
})

test.beforeEach("Before each test",async()=>{
    console.log("------------------Before each test-----------------")
})

//Start of Describe
test.describe("describe",async()=>{
    test.beforeAll("beforeeach inside describe",async()=>{
        console.log("$$$$$$$$$$$$$$$ Before ALL inside Describe $$$$$$$$$$$$$$$")
    })

    test.beforeEach("before each inside describe",async()=>{
        console.log("$$$$$$$$$$$$$$$ Before EACH inside Describe $$$$$$$$$$$$$$$")
        await page.goto("https://opensource-demo.orangehrmlive.com/");
        await page.getByPlaceholder("username").fill("Admin");
        await page.getByPlaceholder("password").fill("admin123");
        await page.getByRole('button',{name:'Login'}).click();
        await page.waitForTimeout(3000);
    })

    test("test 1 inside describe block", async()=>{
        console.log("$$$$$$$$$$$$$$$ TEST 1 inside Describe test $$$$$$$$$$$$$$$")
        await page.getByRole('listitem').filter({hasText:'PIM'}).click();
    })

    test("test 2 inside describe block", async()=>{
        console.log("$$$$$$$$$$$$$$$ TEST 2 inside Describe $$$$$$$$$$$$$$$")
        await page.getByRole('listitem').filter({hasText:'Leave'}).click();
    })

    test.afterEach("After Each inside describe",async()=>{
        console.log("$$$$$$$$$$$$$$$ After Each inside Describe $$$$$$$$$$$$$$$")
        await page.locator('//span[@class="oxd-userdropdown-tab"]').click();
        await page.locator('//a[text()="Logout"]').click();
    })

    test.afterAll("After all inside describe",async()=>{
        console.log("$$$$$$$$$$$$$$$ After All inside Describe $$$$$$$$$$$$$$$")
    })
})
//End of Describe


test.afterEach("After Each Test",async()=>{
    console.log("------------------After each test-----------------")
})

test.afterAll("After all test",async()=>{//closing the browser
    console.log("------------------After All test-----------------")
    browser.close();
})