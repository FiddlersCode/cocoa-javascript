# Cocoa JavaScript
by Paula Muldoon

This project will become an `npm` library to run parameterised testing in JS.

### Usage Instructions
- See https://github.com/FiddlersCode/cocoa-javascript-example/blob/master/README.md for a sample repo
- Run `npm install cocoajs`
- Create your parameters file in `{yourTestFolder}/params`
    - Name your class in the parameters file after the method you are testing

For example, to write a test using the `mocha` `eq` method for this file:
```
class Calculator {
    static add(number1, number2) {
        return number1 + number2;
    }
}

module.exports = Calculator;
```

The params file would be as below (note the filepaths with `../../../` as at the moment it needs to be the path from the node modules folder):
```
class add {
    static paramsFilePath() {
        return '../../../test/acceptance/test/params/add';
    }

    static setup() {
        return {
            codeFile: '../../../test/acceptance/src/Calculator',
            methodName: 'add',
            it: 'should add 2 numbers',
        };
    }

    static scenarios() {
        return {
            scenario1: {
                params: {
                    number1: 1,
                    number2: 2,
                },
                message: 'numbers to add',
                expected: 3,
            },

            scenario2: {
                params: {
                    number1: 2,
                    number2: 2,
                },
                message: 'numbers to add',
                expected: 4,
            },
        };
    }
}

module.exports = add;
```
And your test file:
```
const CocoaJS = require('../../../src/cocoaJS');
const add = require('./params/add');


describe('test eq method', () => {
    describe('addition method', () => {
        CocoaJS.eq(
            add.paramsFilePath(),
            add.setup(),
            add.scenarios(),
        );
    });
});
```


### Development Instructions
- Run `npm install`
- To run all unit tests: `npm run tests`
- To run specific unit test file: `npx mocha test/TESTFILE`
- To run the test coverage: `npm run coverage`
- To run the linter: `npm run eslint`
- Note: there is a pre-commit hook in place which runs the test coverage and linter. You will not be allowed to commit without 95% coverage and 0 linter errors/warnings.

