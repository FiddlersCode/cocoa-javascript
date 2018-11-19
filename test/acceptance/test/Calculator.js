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
