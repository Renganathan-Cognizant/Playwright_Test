import {test,chromium, expect} from '@playwright/test';

test('New page', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();

    const page2 = await context.newPage();

    //reference for getting no of pages
    const totalpage=context.pages();
    console.log(totalpage.length)//number of pages active

    await page1.goto('https://testautomationpractice.blogspot.com/')

    await expect(page1).toHaveTitle('Automation Testing Practice')
    //await expect(page1).to

    await page2.goto('https://ui.vision/demo/webtest/frames')

    await page1.bringToFront()
    await page1.waitForTimeout(5000)

    await page2.bringToFront()
    //await page2.waitForTimeout(5000)
})

test('multitab - context', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    const pagepromise = context.waitForEvent('page');

    await page.getByText('OrangeHRM, INC').click();

    const newpage = await pagepromise


    expect(newpage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")
    await newpage.getByRole('button',{name:'Allow All'}).click();
    await newpage.getByPlaceholder('Your email address').fill("HI")
    await newpage.waitForTimeout(3000)

})

test.only('multitab - promise', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Runs multiple asynchronous operations in parallel and waits for all of them to complete.
    //Destructures the result of Promise.all

    const [multipage] = await Promise.all([
        context.waitForEvent('page'),
        await page.getByText('OrangeHRM, INC').click()
    ])

    await multipage.waitForLoadState();
    await multipage.getByRole('button',{name:'Allow All'}).click();

    //to find the number of pages openend
    const totalpage = multipage.context().pages() //active tabs
    console.log(totalpage.length) //

    //to get the url of the open pages
    totalpage.forEach((url)=>{
        console.log(url.url())
    })

    //to access element in the webpage
        let webpage;

        for(let i=0;i< await totalpage.length; i++){

            const title = await totalpage[i].title()
            if (title == "Human Resources Management Software | HRMS | OrangeHRM")
            {
                webpage = totalpage[i]
            }
        }
        await webpage.getByPlaceholder("Your email address").fill("HI Batch")
        await webpage.waitForTimeout(2000)
})