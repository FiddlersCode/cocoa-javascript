const chai = require('chai');

const { expect } = chai;

const Prc = require('./prc');
const getPRCIndex = require('./params/getPRCIndex');
const CocoaJS = require('../../src/cocoaJS');
const ErrorMessages = require('./params/errorMessages');


describe('get PRC index', () => {
    describe('get PRC index with loop', () => {
        describe('user indices', () => {
            CocoaJS.eq(
                getPRCIndex.paramsFilePath(),
                getPRCIndex.setup(),
                getPRCIndex.scenarios(),
            );
        });

        describe('error handling', () => {
            Object.entries(getPRCIndex.errorScenarios()).forEach((errorScenario) => {
                expect(() => Prc.getPRCIndex(
                    errorScenario[1].userId,
                    errorScenario[1].numberPRCsUsed,
                )).to.throw(ErrorMessages.errorMessages().noPrcError);
            });
        });
    });
});
