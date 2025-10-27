//types of fixture
//1.test fixture-requested by test and gets rerun per test

 import {test} from '../../Fixtures/customfixture'

// test("test1", async({fixture1})=>{
//     console.log(`use statement execution : ${fixture1}`) //playwright sep batch
// })

// test("test2", async({fixture1})=>{
//     console.log(`use statement execution : ${fixture1}`) //playwright sep batch
// })

//2.Worker fixture - runs only once per worker

test("testworker",async({fixture1,workerfixture})=>{
    console.log(`use statement execution : ${fixture1}`)
    console.log(`use statement execution : ${workerfixture}`)
})

test("test2worker",async({fixture1})=>{
    console.log(`use statement execution : ${fixture1}`)
})