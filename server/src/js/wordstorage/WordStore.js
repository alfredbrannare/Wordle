export default class WordStore {
    constructor() {
        this.correctWord = null;
    }

    setCorrectWord(word) {
        this.correctWord = word;
        return this.correctWord;
    }

    getCorrectWord() {
        return this.correctWord;
    }
}