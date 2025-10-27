import type {
  FullConfig, FullResult, Reporter, Suite, TestCase, TestResult
} from '@playwright/test/reporter';

//import * as fs from 'fs';

class MyReporter implements Reporter {
  onBegin(config: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test: TestCase, result: TestResult) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test ${test.title}: ${result.status}`);
  }

  onEnd(result: FullResult) {
    console.log(`Finished the run: ${result.status}`);
  }
}

export default MyReporter;


// const timetaken=result.duration;
//     const data = {
//         test: test.title,
//         executiontime:timetaken,
//         status:result.status,
//         errors:result.errors,
//     }
    
//     const datatostr = JSON.stringify(DataTransfer,null,2)
//     console.log(datatostr)
//     fs.writeFileSync("customreport.json",datatostr)