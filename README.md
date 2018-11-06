# Cocoa JavaScript
by Paula Muldoon

This project will become an `npm` library to run parameterised testing in JS.

### Usage Instructions
- Run `npm install cocoajs`
- Create your parameters file in `{yourTestFolder}/params`
    - Name your class in the parameters file after the method you are testing

```
class getPRCIndex {
    static setup() {
        return {
            codeFile: '../test/acceptance/prc',
            paramsFilePath: '../test/acceptance/params/getPRCIndex',
            methodName: 'getPRCIndex',
            it: 'should return a user index',
        };
    }

    static scenarios() {
        return {
            scenario1: {
                params: {
                    userId: 1,
                    numberPRCsUsed: 0,
                    i: 1,
                    n: 7,
                },
                message: 'number of PRCs used',
                expected: 1,
            },

            scenario2: {
                params: {
                    userId: 1,
                    numberPRCsUsed: 3,
                    i: 1,
                    n: 7,
                },
                message: 'number of PRCs used',
                expected: 4,
            },
    }
}

module.exports = getPRCIndexWithLoop;
```
- In your test file, require the CocoaJs with `const CocoaJS = require('cocoaJS');` and then
```
        describe('user indices', () => {
            CocoaJS.eq(
                getPRCIndex.scenarios(),
                getPRCIndex.setup(),
                getPRCIndex.setup().paramsFilePath,
            );
        });
```


### Development Instructions
- Run `npm install`
- To run all unit tests: `npm run tests`
- To run specific unit test file: `npx mocha test/TESTFILE`
- To run the test coverage: `npm run coverage`
- To run the linter: `npm run eslint`
- Note: there is a pre-commit hook in place which runs the test coverage and linter. You will not be allowed to commit without 95% coverage and 0 linter errors/warnings.

