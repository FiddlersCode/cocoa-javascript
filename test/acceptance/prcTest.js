const chai = require('chai');

const { expect } = chai;

const Prc = require('./prc');
const getPRCIndexWithLoop = require('./params/getPRCIndexWithLoop');
const getPRCIndexRecursively = require('./params/getPRCIndexRecursively');
const CocoaJS = require('../../src/cocoaJS');
const isUserAdmin = require('./params/isUserAdmin');
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

    describe('get PRC index recursively', () => {
        describe('user indices', () => {
            CocoaJS.eq(
                getPRCIndexRecursively.scenarios(),
                getPRCIndexRecursively.setup(),
                getPRCIndexRecursively.setup().paramsFilePath,
            );
        });

        describe('error handling', () => {
            Object.entries(getPRCIndexRecursively.errorScenarios()).forEach((errorScenario) => {
                it('throws an error if no remaining PRCs', () => {
                    expect(() => Prc.getPRCIndexRecursively(
                        errorScenario[1].userId,
                        errorScenario[1].numberPRCsUsed,
                        getPRCIndexRecursively.data().i,
                        getPRCIndexRecursively.data().n,
                    )).to.throw(ErrorMessages.errorMessages().noPrcError);
                });
            });
        });
    });

    describe('is user admin', () => {
        Object.entries(isUserAdmin.scenarios()).forEach((scenario) => {
            it('returns an admin index', () => {
                expect(Prc.isUserAdmin(scenario[1].userId)).to.eq(scenario[1].expected);
            });
        });
    });
});
