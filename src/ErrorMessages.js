class ErrorMessages {
    static mochaErrors() {
        return {
            tooManyWords: 'You appear to have too many words in your mocha methods.',
        };
    }

    static scenarioErrors() {
        return {
            noScenarios: 'Scenarios are required.',
        };
    }
}

module.exports = ErrorMessages;
