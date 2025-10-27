import{expect,test} from '@playwright/test';

test('simple alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //handling popup

    page.on('dialog', async(dialog) => {
        console.log(dialog.type()) //simple alert
        console.log(dialog.message()) //I am an alert box!
        await dialog.accept(); 
    })
    //CONDITION: in playwright before clicking any prompt we need to handle that event 
    await page.click("button:has-text('Simple Alert')")
})

//explore "page.once()" & which is a good option to use


test('confirmation alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(dialog) => {
        console.log(dialog.type()) //
        console.log(dialog.message()) 
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss();
        //await dialog.accept();
    })
    
    await page.click("button:has-text('Confirmation Alert')")
    await page.waitForTimeout(10000)
    //await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
})

test('prompt alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(dialog) => {
        console.log(dialog.type())
        console.log(dialog.message())
        console.log(dialog.defaultValue())//to get the default value availble in the input box of an alert
        //
        //await dialog.dismiss();
        await dialog.accept("playwright is evolving faster");
    })
    
    await page.click("button:has-text('Prompt Alert')")
    await page.waitForTimeout(10000)
})

//Assignment
//confirmation alert & Prompt alert
//page.once


test('simple alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async(dialog) => {
        console.log(dialog.type())
        console.log(dialog.message())
        await dialog.accept(); 
    })
    
    await page.click("button:has-text('Simple Alert')")
})