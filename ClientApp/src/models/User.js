export class User {

    constructor(id, userName, correctCount, incorrectCount, correctPercentage, incorrectPercentage) {
        this.id = id;
        this.userName = userName;
        this.correctCount = correctCount;
        this.incorrectCount = incorrectCount;
        this.correctPercentage = correctPercentage;
        this.incorrectPercentage = incorrectPercentage;
    }

}