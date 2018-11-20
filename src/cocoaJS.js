const chai = require('chai');
const ErrorMessages = require('./ErrorMessages');

const { expect } = chai;

class CocoaJS {
    static test(setup, scenarios) {
        if (!scenarios) {
            throw ErrorMessages.scenarioErrors().noScenarios;
        }

        Object.entries(scenarios).forEach((scenario) => {
            it(setup.it, () => {
                const params = [];
                CocoaJS.getParams(scenario, params);
                const actual = setup.codeFile[setup.testMethod](...params);
                expect(actual, CocoaJS.getMessage(scenario))
                    .to[setup.mochaMethod](scenario[1].expected);
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
