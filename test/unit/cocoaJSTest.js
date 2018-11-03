const chai = require('chai');

const { expect } = chai;

const CocoaJs = require('../../src/cocoaJS');


describe('test eq method', () => {
    describe('eq', () => {
        xit('should throw an error without the expected parameter', () => {

            expect(() => CocoaJs.eq(scenarios, setup, paramsFilePath)).to.throw('Cannot convert undefined or null to object');
        });
    });

    describe('get params', () => {
        it('should get the params', () => {
            const scenario = [
                'scenario1', {
                    params: {
                        userId: 1,
                        numberPRCsUsed: 0,
                        i: 1,
                        n: 7,
                    },
                },
            ];
            const params = [];
            const actual = CocoaJs.getParams(scenario, params);
            const expected = [1, 0, 1, 7];
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
            const actual = CocoaJs.getParams(scenario, params);
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
            expect(() => CocoaJs.getParams(scenario, params)).to.throw('Cannot convert undefined or null to object');
        });
    });
});
