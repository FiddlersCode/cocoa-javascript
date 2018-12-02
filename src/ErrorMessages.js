class ErrorMessages {
    static mochaErrors() {
        return {
            tooBigAssertion: 'You appear to have too many words in your mocha methods.',
            missingAssertion: 'You forgot to put in your assertion!',
        };
    }

    static scenarioErrors() {
        return {
            noScenarios: 'Scenarios are required.',
            testMessage: 'woooooooo'
        };
    }
}

module.exports = ErrorMessages;
