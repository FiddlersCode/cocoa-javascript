const chai = require('chai');
const ErrorMessages = require('./ErrorMessages');

const { expect } = chai;

class CocoaJS {
    static eq(scenarios, setup, paramsFilePath) {
        if (!scenarios) {
            throw ErrorMessages.scenarioErrors().noScenarios;
        }
        const paramsFile = require(paramsFilePath);
        const codeFile = require(paramsFile.setup().codeFile);

        Object.entries(scenarios).forEach((scenario) => {
            it(setup.it, () => {
                const params = [];
                CocoaJS.getParams(scenario, params);
                const actual = codeFile[setup.methodName](...params);
                expect(actual, CocoaJS.getMessage(scenario))
                    .to.eq(scenario[1].expected);
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
