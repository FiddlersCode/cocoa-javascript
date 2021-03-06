const chai = require('chai');

const { expect } = chai;

const CocoaJS = require('../../src/cocoaJS');
const ErrorMessages = require('../../src/ErrorMessages');


describe('test method', () => {
    describe('test', () => {
        describe('errors', () => {
            const setup = {
            };

            it('should throw with missing mocha method', () => {
                const mochaAssertions = [];
                expect(() => CocoaJS.test(setup, mochaAssertions))
                    .to.throw(ErrorMessages.mochaErrors().missingAssertion);
            });

            it('should throw with more than 4 mocha words', () => {
                const mochaAssertions = ['have', 'not', 'any', 'more', 'bacon'];
                expect(() => CocoaJS.test(setup, mochaAssertions))
                    .to.throw(ErrorMessages.mochaErrors().tooBigAssertion);
            });

            it('should throw an error without the scenarios object', () => {
                const mochaAssertions = ['have'];
                expect(() => CocoaJS.test(setup, mochaAssertions))
                    .to.throw(ErrorMessages.scenarioErrors().noScenarios);
            });
        });
    });

    describe('get params', () => {
        it('should get the params', () => {
            const scenario = [
                'scenario1', {
                    params: {
                        userId: 1,
                        numberPRCsUsed: 0,
                    },
                },
            ];
            const params = [];
            const actual = CocoaJS.getParams(scenario, params);
            const expected = [1, 0];
            expect(actual).to.deep.eq(expected);
        });

        it('should return an empty array with no params', () => {
            const scenario = [
                'scenario1', {
                    params: {
                    },
                },
            ];
            const params = [];
            const actual = CocoaJS.getParams(scenario, params);
            const expected = [];
            expect(actual).to.deep.eq(expected);
        });

        it('should throw an error if params are missing', () => {
            const scenario = [
                'scenario1', {
                    message: {
                    },
                },
            ];
            const params = [];
            expect(() => CocoaJS.getParams(scenario, params)).to.throw('Cannot convert undefined or null to object');
        });
    });
});
