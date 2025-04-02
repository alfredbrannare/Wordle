export default class WordStore {
    constructor() {
        this.correctWord = null;
        this.guesses = [];
    }

    setCorrectWord(word) {
        this.correctWord = word;
        return this.correctWord;
    }

    getCorrectWord() {
        return this.correctWord;
    }

    setGuess(guess) {
        this.guesses.push(guess);
    }

    getGuesses() {
        return this.guesses;
    }
}