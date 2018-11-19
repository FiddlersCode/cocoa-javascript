const chai = require('chai');

const { expect } = chai;

const CocoaJS = require('../../src/cocoaJS');
const ErrorMessages = require('../../src/ErrorMessages');


describe('test eq method', () => {
    describe('eq', () => {
        describe('scenarios errors', () => {
            it('should throw an error without the scenarios object', () => {
                expect(() => CocoaJS.eq())
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
