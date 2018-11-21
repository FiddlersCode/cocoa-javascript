const chai = require('chai');
const ErrorMessages = require('./ErrorMessages');

const { expect } = chai;

class CocoaJS {
    static test(setup, mochaMethods, scenarios) {
        if (mochaMethods.length < 1) {
            throw new Error(ErrorMessages.mochaErrors().missingAssertion);
        }
        if (mochaMethods.length > 4) {
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

                if (mochaMethods.length === 1) {
                    return expect(actual, CocoaJS.getMessage(scenario))
                        .to[mochaMethods[0]](scenario[1].expected);
                }
                if (mochaMethods.length === 2) {
                    return expect(actual, CocoaJS.getMessage(scenario))
                        .to[mochaMethods[0]][mochaMethods[1]](scenario[1].expected);
                }

                if (mochaMethods.length === 3) {
                    return expect(actual, CocoaJS.getMessage(scenario))
                        .to[mochaMethods[0]][mochaMethods[1]][mochaMethods[2]](scenario[1]
                            .expected);
                }

                /* eslint-disable */
                return expect(actual, CocoaJS.getMessage(scenario))
                    .to[mochaMethods[0]]
                    [mochaMethods[1]]
                    [mochaMethods[2]]
                    [mochaMethods[3]]
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
