import { defineConfig, devices } from '@playwright/test';
import { off } from 'process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  // expect:{
  //   timeout:10000, //default 5000
  // },
  fullyParallel: true, //false
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,//10 tc - 2 failed - 4 --> 14tc
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1 , // ternary operator condition? true:false , max 3 - max4/5
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  //reporter:[['./customreport.ts']],
  //reporter:"allure-playwright",
  //reporter:[['allure-playwright',{outputFolder:'MyAllureResult'}]],
  //reporter:[['json',{outputFile:'myjson.json'}]],
  //reporter:process.env.CI?'github':'html',
  //reporter:[['list'],['html',{open:'always'}]],
  //reporter:[['html',{open:'always'}]],
  //reporter:'line',
  //globalTeardown:'./globalTeardown.spec.ts',
  reporter: 'list',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  //timeout:10000, //default 30s
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on', //logs
    //viewport:{width:400,height:700},
    actionTimeout: 5000, //this will set the timeout for pw actions - fill(),click()
    screenshot: 'on',
    video: 'on',
    headless: false //headed
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        //viewport:{width:400,height:700},
       },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Nexus 10'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['Galaxy A55 landscape'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
