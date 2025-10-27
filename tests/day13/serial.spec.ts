import {test} from '@playwright/test';
import moment from 'moment';

test.describe.serial('serial execution',async()=>{
    test('datepicker1 Method1', async({page})=>{
        //direct method if we can write inside the input box
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.locator("#datepicker").scrollIntoViewIfNeeded();
        await page.waitForTimeout(5000)
        await page.fill("#datepicker","10/08/2025")
        await page.waitForTimeout(5000)
    })
    
    test('datepicker1 Method2', async({page})=>{
    
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.locator("#datepicker").scrollIntoViewIfNeeded();
        await page.waitForTimeout(500)
    
        const expectedYear = "2026"
        const expectedMonth = "April"
        const expectedDate = "25"    
    
        await page.click("#datepicker"); //this locator click will opens the calendar
    
        while(true){
    
            const currentYear = await page.locator(".ui-datepicker-year").textContent(); //current year
            const currentMonth = await page.locator(".ui-datepicker-month").textContent();
    
            if(currentYear === expectedYear && currentMonth === expectedMonth){
                break;
            }
            await page.locator('[title="Next"]').click();
     
        }
    
        await page.locator(`tr>td>a:text-is('${expectedDate}')`).click();
    
    })
    
    test('datepicker1 Method3', async({page})=>{
    
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.locator("#datepicker").scrollIntoViewIfNeeded();
        await page.waitForTimeout(5000)
    
        const expectedYear = "2024"
        const expectedMonth = "April"
        const expectedDate = "25"    
    
        await page.click("#datepicker"); //this locator click will opens the calendar
    
        const monthMap: { [key: string]: number } = {January: 1, February: 2, March: 3, April: 4,
        May: 5, June: 6, July: 7, August: 8,
        September: 9, October: 10, November: 11, December: 12};
        
        while (true) {
            const currentYearText = await page.locator(".ui-datepicker-year").textContent();
            const currentMonthText = await page.locator(".ui-datepicker-month").textContent();
    
            const currentYear = Number(currentYearText?.trim());
            const currentMonth = monthMap[currentMonthText?.trim() || ""];
    
            const expectedMonthNumber = monthMap[expectedMonth];
    
            if (Number(currentYear) === Number(expectedYear) && currentMonth === expectedMonthNumber)
                {
                    break;
                }
    
            if ( Number(expectedYear) > currentYear || (Number(expectedYear) === currentYear && expectedMonthNumber > currentMonth))
                {
                await page.locator('[title="Next"]').click();
                } else 
                {
                await page.locator('[title="Prev"]').click();
                }
    
                await page.waitForTimeout(300); // Optional: wait for calendar to update
        }
    
        await page.locator(`tr>td>a:text-is('${expectedDate}')`).click();
    
    })
    
    test('datepicker2', async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.locator("#datepicker").scrollIntoViewIfNeeded();
        await page.click('#txtDate')
    
        let selectMonth = "Nov"
        let selectYear = "2026"
        let date = "16"
    
        await page.selectOption('.ui-datepicker-year', `${selectYear}`);
        await page.selectOption('.ui-datepicker-month', `${selectMonth}`);
        await page.locator(`tr>td>a:text-is('${date}')`).click();
        await page.waitForTimeout(5000)
    
    })
    
    test('lambdasite daterange', async({page})=>{
    
        await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    
        await selectDate(13, "January 2025")
        //await selectDate(12, "December 2026")
        //await selectDate(8, "October 2025")
    
    
        async function selectDate(date: number, dateToSelect: string){
    
            await page.click("//input[@placeholder='Start date']")
    
            const currentValue = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
            const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
            const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")
    
    
            const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
            console.log("this month? " + thisMonth ); //true
            while (await currentValue.textContent() != dateToSelect){
                if (thisMonth){
                    await prev.click();
                } else {
                    await next.click();
                }
            }
            await page.click(`//td[@class='day'][text()='${date}']`);
        }
    })
})