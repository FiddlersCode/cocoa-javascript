const ErrorMessages = require('./params/errorMessages');

class PRC {
    static getPRCIndexWithLoop(userId, numberPRCsUsed) {
        const adminUserMaxPRCs = 10;
        const normalUserMaxPRCs = 3;

        if (numberPRCsUsed >= adminUserMaxPRCs) {
            throw new Error(ErrorMessages.errorMessages().noPrcError);
        }

        if (this.isUserAdmin(userId)) {
            return numberPRCsUsed + 1;
        }

        if (numberPRCsUsed >= normalUserMaxPRCs) {
            throw new Error(ErrorMessages.errorMessages().noPrcError);
        }
        let n = 7;
        for (let i = 1; i < userId; i += 1) {
            n += 2;
        }
        return userId + numberPRCsUsed + n;
    }
    static isUserAdmin(userId) {
        return userId === 1;
    }
}
module.exports = PRC;
