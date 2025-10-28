import {test, expect} from '@playwright/test';

test('screenshot on page & locator', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#datepicker").scrollIntoViewIfNeeded();
    await page.locator("#datepicker").screenshot({path:'locatorLevelSS.png'})
    await page.waitForTimeout(2000)
    await page.fill("#datepicker","10/08/2025")
    await page.screenshot({path: 'pageLevelSS.png'})
    await page.waitForTimeout(2000)
})

test('Visual Testing example 2', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#datepicker").scrollIntoViewIfNeeded();
    expect(await page.screenshot()).toMatchSnapshot('exactmatch.png')
})


//3 workers in config
//two test cases in a file
//going to run this entire file
//  in two browsers
//total 4 tc's to run
//3 -->workers
//1 --> 1 worker fir  --> 
//2 --> 2 worker fir
//3 --> 3 worker web
//4








// test('Visual Testing example 1', async({page})=>{
//     await page.goto("https://www.flightaware.com/live/")
//     expect(await page.screenshot()).toMatchSnapshot('visualmatch.png')
// })