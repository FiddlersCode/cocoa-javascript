const CocoaJS = require('../../../src/cocoaJS');
const add = require('./params/add');


describe('test eq method', () => {
    describe('addition method', () => {
        CocoaJS.eq(
            add.paramsFilePath(),
            add.setup(),
            add.scenarios(),
        );
    });
});
