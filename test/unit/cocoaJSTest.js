const chai = require('chai');

const { expect } = chai;

const CocoaJs = require('../../src/cocoaJS');


describe('test eq method', () => {
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
                    message: 'number of PRCs used',
                    expected: 1,
                },
            ];
            const params = [];
            const actual = CocoaJs.getParams(scenario, params);
            const expected = [1, 0, 1, 7];
            expect(actual).to.deep.eq(expected);
        });
    });
});
