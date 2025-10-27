import {chromium, test} from '@playwright/test';
// import { channel } from 'diagnostics_channel';

test('kickstart', async() => {

    const browser = await chromium.launch({channel:'chrome', headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    page.goto("https://www.gmail.com")

})


