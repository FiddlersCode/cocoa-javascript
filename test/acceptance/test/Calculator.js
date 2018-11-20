const CocoaJS = require('../../../src/cocoaJS');
const Calculator = require('../src/Calculator');

describe('test eq method', () => {
    describe('addition method', () => {
        const setup = {
            it: 'should add 2 numbers',
            codeFile: Calculator,
            testMethod: 'add',
        };

        const mochaMethods = ['eq'];

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
        };
        CocoaJS.test(
            setup,
            mochaMethods,
            scenarios,
        );
    });

    describe('test deep equals', () => {
        const setup = {
            it: 'should add 2 numbers',
            codeFile: Calculator,
            testMethod: 'add',
        };

        const mochaMethods = ['deep', 'eq'];

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
            mochaMethods,
            scenarios,
        );
    });
});
