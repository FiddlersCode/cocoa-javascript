const chai = require('chai');
const ErrorMessages = require('./ErrorMessages');

const { expect } = chai;

class CocoaJS {
    static test(setup, mochaAssertions, scenarios) {
        if (mochaAssertions.length < 1) {
            throw new Error(ErrorMessages.mochaErrors().missingAssertion);
        }
        if (mochaAssertions.length > 4) {
            throw new Error(ErrorMessages.mochaErrors().tooBigAssertion);
        }

        if (!scenarios) {
            throw ErrorMessages.scenarioErrors().noScenarios;
        }

        Object.entries(scenarios).forEach((scenario) => {
            it(setup.it, () => {
                const params = [];
                CocoaJS.getParams(scenario, params);
                const actual = setup.codeFile[setup.testMethod](...params);

                if (mochaAssertions.length === 1) {
                    return expect(actual, CocoaJS.getMessage(scenario))
                        .to[mochaAssertions[0]](scenario[1].expected);
                }
                if (mochaAssertions.length === 2) {
                    return expect(actual, CocoaJS.getMessage(scenario))
                        .to[mochaAssertions[0]][mochaAssertions[1]](scenario[1].expected);
                }

                if (mochaAssertions.length === 3) {
                    return expect(actual, CocoaJS.getMessage(scenario))
                        .to[mochaAssertions[0]][mochaAssertions[1]][mochaAssertions[2]](scenario[1]
                            .expected);
                }

                /* eslint-disable */
                return expect(actual, CocoaJS.getMessage(scenario))
                    .to[mochaAssertions[0]]
                    [mochaAssertions[1]]
                    [mochaAssertions[2]]
                    [mochaAssertions[3]]
                    (scenario[1].expected);
                /* eslint-enable */
            });
        });
    }

    static getMessage(scenario) {
        return `${JSON.stringify(scenario[1].message)} ${JSON.stringify(scenario[1].params)}`;
    }

    static getParams(scenario, params) {
        Object.entries(scenario[1].params).forEach((scenarioParam) => {
            params.push(scenarioParam[1]);
        });
        return params;
    }
}
module.exports = CocoaJS;
