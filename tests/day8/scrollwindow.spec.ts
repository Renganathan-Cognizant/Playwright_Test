import {test, expect } from "@playwright/test";

test ("scrollingwindow", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //approach1

    await page.evaluate(()=>{
        window.scrollBy(0,80)//vertically
        window.scrollBy(2,0)//
    })

    //approach2
    const ele=page.locator('#country')
    ele.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000)

    //approach3 - bounding box
    let val=page.locator('#country')
    const box = await val.boundingBox();
    if(box){
        console.log(box.x); //88
        console.log(box.y); //1000
        await page.mouse.wheel(0,box.y);
    }
    await page.waitForTimeout(10000)
})

