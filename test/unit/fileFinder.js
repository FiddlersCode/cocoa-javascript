const chai = require('chai');

const { expect } = chai;

const FileFinder = require('../../src/fileFinder');


describe('test eq method', () => {
    it('should return the node file path', () => {
        const expected = '';
        const actual = FileFinder.getNodeFilePath();
        expect(expected).to.deep.eq(actual);
    });
});
