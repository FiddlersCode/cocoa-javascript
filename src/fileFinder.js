class FileFinder {
    static getNodeFilePath() {
        return '';
    }

    static getFilePath(file) {
        return `${FileFinder.getNodeFilePath()}${file}`;
    }
}

module.exports = FileFinder;
