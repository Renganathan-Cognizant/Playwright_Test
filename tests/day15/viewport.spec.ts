import {test,chromium} from '@playwright/test';

test('set viewport method 1',async()=>{
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.gmail.com")

    const width = await page.evaluate(()=>{
        return window.screen.width
    })
    console.log(width)

    const height = await page.evaluate(()=>{
        return window.screen.height
    })
    console.log(height)

    await page.setViewportSize({width,height})
    await page.goto("https://www.gmail.com");
    await page.waitForTimeout(5000);
})


test('viewport method 2', async () => {
  const browser = await chromium.launch({
    headless: false,
    //args: ['--start-maximized'],
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }, 
  });

  const page = await context.newPage();
  await page.goto('https://www.gmail.com');
  await page.waitForTimeout(5000);
});


// test.only('viewport method 2',async()=>{
//     const browser = await chromium.launch({headless:false,args:['--start-maximized']}); //only for chrome
//     const context = await browser.newContext({
//         //viewport: {height:1080,width:720},
//     })
//     const page = await context.newPage();

//     //await page.setViewportSize({width,height})
//     await page.goto("https://www.gmail.com");
//     await page.waitForTimeout(5000);
// })