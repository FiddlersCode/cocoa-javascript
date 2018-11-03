class ErrorMessages {
    static paramErrors() {
        return {
            noExpected: 'Expected parameter is required.',
        };
    }

    static setupErrors() {
        return {
            noExpected: 'Expected parameter is required.',
            noCodeFilePath: 'Code filepath is required.',
            noParamsFilePath: 'Params filepath parameter is required.',
            noMethodName: 'Method name parameter is required.',
            noItBlock: 'It block parameter is required.',
        };
    }
}

module.exports = ErrorMessages;
