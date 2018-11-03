const chai = require('chai');

const { expect } = chai;

const Prc = require('./prc');
const getPRCIndexWithLoop = require('./params/getPRCIndexWithLoop');
const CocoaJS = require('../../src/cocoaJS');
const ErrorMessages = require('./params/errorMessages');


describe('get PRC index', () => {
    describe('get PRC index with loop', () => {
        describe('user indices', () => {
            CocoaJS.eq(
                getPRCIndexWithLoop.scenarios(),
                getPRCIndexWithLoop.setup(),
                getPRCIndexWithLoop.setup().paramsFilePath,
            );
        });

        describe('error handling', () => {
            Object.entries(getPRCIndexWithLoop.errorScenarios()).forEach((errorScenario) => {
                expect(() => Prc.getPRCIndexWithLoop(
                    errorScenario[1].userId,
                    errorScenario[1].numberPRCsUsed,
                )).to.throw(ErrorMessages.errorMessages().noPrcError);
            });
        });
    });
});
