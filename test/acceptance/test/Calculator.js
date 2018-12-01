const CocoaJS = require('../../../src/cocoaJS');
const Calculator = require('../src/Calculator');

describe('test mocha methods', () => {
    describe('1-word method', () => {
        const setup = {
            it: 'should add 2 numbers',
            codeFile: Calculator,
            testMethod: 'add',
        };

        const mochaAssertions = ['eq'];

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
            mochaAssertions,
            scenarios,
        );
    });

    describe('2-word method', () => {
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

    describe('3-word method', () => {
        const setup = {
            it: 'should have ordered members',
            codeFile: Calculator,
            testMethod: 'orderNumbers',
        };

        const mochaAssertions = ['have', 'ordered', 'members'];

        const scenarios = {
            scenario1: {
                params: {
                    array: [22, 18, 2],
                },
                message: 'array members:',
                expected: [22, 18, 2],
            },
        };
        CocoaJS.test(
            setup,
            mochaAssertions,
            scenarios,
        );
    });

    describe('4-word method', () => {
        const setup = {
            it: 'should not have any keys',
            codeFile: Calculator,
            testMethod: 'objectChecker',
        };

        const mochaAssertions = ['not', 'have', 'any', 'keys'];

        const scenarios = {
            scenario1: {
                params: {
                    object: { c: 3 },
                },
                message: 'object param:',
                expected: ['a', 'b'],
            },
        };
        CocoaJS.test(
            setup,
            mochaAssertions,
            scenarios,
        );
    });
});
