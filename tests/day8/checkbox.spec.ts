import{expect,test} from '@playwright/test';

test('checkbox', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //clicking of single checkbox
    await page.check('[value="sunday"]')
    expect (page.locator('[value="sunday"]')).toBeChecked();
    await page.waitForTimeout(5000)
    await page.uncheck('[value="sunday"]')
    expect (page.locator('[value="monday"]')).not.toBeChecked();
    await page.waitForTimeout(5000)
})

//what if i need to check on multiple checkboxes
//achieving that by loops

test('multiple checkboxes', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const checkbox = ['[value="sunday"]',"//input[@id='monday' and @type='checkbox']"]
    
    for (const local of checkbox){
        await page.locator(local).check();
        //console.log
    }
    await page.waitForTimeout(5000)

    //to uncheck multiple check box

    for (const locate of checkbox){
        if(await page.locator(locate).isChecked()){
            await page.locator(locate).uncheck();
        }
    }
    await page.waitForTimeout(5000)
})