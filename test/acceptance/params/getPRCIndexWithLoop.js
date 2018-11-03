const PrcIndexParams = require('./prcIndexParams');

class getPRCIndexWithLoop extends PrcIndexParams {
    static setup() {
        return {
            codeFile: '../test/acceptance/prc',
            paramsFilePath: '../test/acceptance/params/getPRCIndexWithLoop',
            methodName: 'getPRCIndexWithLoop',
            it: 'should return a user index',
        };
    }
}

module.exports = getPRCIndexWithLoop;
