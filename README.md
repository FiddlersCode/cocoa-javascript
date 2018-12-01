# Cocoa JavaScript
by Paula Muldoon

This project is an `npm` library to run parameterised testing in `JS` and [mocha](https://www.npmjs.com/package/mocha). Contributions are welcome (see development guide below).

Why CocoaJS? My favourite coffee shop in the world, [Coffee Obsession](https://coffeeobsession.com/), has the delicious Cocoa Java. Cocoa JavaScript seemed a fitting commemoration. 

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

- Would have the following test file:
```apple js

const CocoaJS = require('cocoaJS');
const Calculator = require('../src/Calculator');

describe('test add method', () => {
    const setup = {
        it: 'should add 2 numbers',
        codeFile: Calculator,
        testMethod: 'add',
    };

    const mochaAssertions = ['deep', 'eq'];

    const scenarios = {
        scenario1: {
            params: {
                number1: '1',
                number2: '2',
            },
            message: 'numbers to add',
            expected: '12',
        },

        scenario2: {
            params: {
                number1: '2',
                number2: '2',
            },
            message: 'numbers to add',
            expected: '22',
        },
    };
    CocoaJS.test(
        setup,
        mochaAssertions,
        scenarios,
    );
});

```
### Notes
- you can add up to 4 `mocha` chains/assertions
- calling further chains after the initial assertion (e.g. `expect([1, 2]).to.be.an('array').that.does.not.include(3);`, where `.that.does.not.include(3)` is the further assertion, will be supported in a later version)

### Development Instructions
- Run `npm install`
- To run all unit tests: `npm run tests`
- To run specific unit test file: `npx mocha test/TESTFILE`
- To run the test coverage: `npm run coverage`
- To run the linter: `npm run eslint`
- Note: there is a pre-commit hook in place which runs the test coverage and linter. You will not be allowed to commit without 95% coverage and 0 linter errors/warnings.

