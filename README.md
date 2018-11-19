# Cocoa JavaScript
by Paula Muldoon

This project is an `npm` library to run parameterised testing in `JS` and `mocha`. Contributions are welcome (see development guide below).

This is an MVP version which currently only supports the `mocha` `eq` method. Feedback welcome and I will be implementing further `mocha` methods this week.

### Usage Instructions
- Run `npm install cocoajs`

- To write a test using the `mocha` `eq` method for this file:
```
class Calculator {
    static add(number1, number2) {
        return number1 + number2;
    }
}

module.exports = Calculator;
```

- And the following test file:
```apple js
const CocoaJS = require('../../../src/cocoaJS');

describe('test eq method', () => {
    describe('addition method', () => {
        const setup = {
            codeFile: '../test/acceptance/src/Calculator',
            methodName: 'add',
            it: 'should add 2 numbers',
        };

        const scenarios = {
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

            scenario3: {
                params: {
                    number1: 4,
                    number2: 10,
                },
                message: 'numbers to add',
                expected: 14,
            },
        };
        CocoaJS.eq(
            setup,
            scenarios,
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

