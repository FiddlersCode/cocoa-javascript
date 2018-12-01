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

- And the following test file:
```apple js
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

### Development Instructions
- Run `npm install`
- To run all unit tests: `npm run tests`
- To run specific unit test file: `npx mocha test/TESTFILE`
- To run the test coverage: `npm run coverage`
- To run the linter: `npm run eslint`
- Note: there is a pre-commit hook in place which runs the test coverage and linter. You will not be allowed to commit without 95% coverage and 0 linter errors/warnings.

