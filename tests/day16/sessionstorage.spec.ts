import {test} from '@playwright/test';

test('session storage',async({page})=>{
    test.setTimeout(60000); // 60 seconds
    await page.goto("https://bookcart.azurewebsites.net/login");
    await page.locator("input[formcontrolname='username']").fill("ortoni");
    await page.locator("input[formcontrolname='password']").fill("Pass1234$");
    await page.locator("//span[@class='mdc-button__label' and text()='Login']").click();

    await page.waitForSelector("//span[@class='mdc-button__label']//span[text()=' ortoni']", {timeout:5000})

    await page.context().storageState({path:'./Login.json'})
})





// test('session storage',async({page})=>{
//     test.setTimeout(60000); // 60 seconds
//     await page.goto("https://opensource-demo.orangehrmlive.com/");
//     await page.getByPlaceholder("username").fill("Admin");
//     await page.getByPlaceholder("password").fill("admin123");
//     await page.getByRole('button',{name:'Login'}).click();
//     //await page.waitForURL('**/dashboard/**');
//     await page.context().storageState({path:'./Login.json'})
// })

// https://bookcart.azurewebsites.net/login