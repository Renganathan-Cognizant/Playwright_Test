import { test as basetest } from '@playwright/test';

// Custom type annotations in TS
type fixture1 = {
  fixture1: string;
};

type worker = {
  workerfixture: any;
};


export const test = basetest.extend<fixture1,worker>({
  fixture1: async ({}, use) => {
    const fixture1 = "Playwright Sep batch";
    console.log("before executing use statement - fixture 1");
    await use(fixture1);
    console.log("after executing use fixture 1");
  },

  workerfixture: [
    async ({}, use) => {
      const workerfixture = "worker fixture";
      console.log("before executing worker fixture");
      await use(workerfixture);
      console.log("after executing worker fixture");
    },
    { scope: 'worker' } // 
  ]
});


//1. test fixture - whenever requested tets method, it rerun every test
//2.worker fixture : it will run only once per worker



// import {test as basetest} from '@playwright/test';

// //custom type annotations in TS
// //my own created data type
// type fixture1={
//     fixture1:String
// }

// type worker = {
//     workerfixture:any;
// }

// //export const test=

// export const test=basetest.extend<fixture1, worker>({
//     fixture1:async({},use)=>{ //
//         //before use
//         const fixture1 = "Playwright Sep batch"
//         console.log("before executing use statement - fixture 1")
//         //use - will run the test from where fixture is called
//         await use(fixture1) //control goes to spec file
//         //after use
//         console.log("after executing use fixture 1")
//     },

//     workerfixture:[
//         async({},use)=>{
//         //before
//         const workerfixture = "worker fixture"
//         console.log("before executing worker fixture")
//         //use - will run the test from where fixture is called
//         await use(workerfixture)
//         //after
//         console.log("after executing worker fixture"),
//         {scope:"worker"}
//     }]
// })


