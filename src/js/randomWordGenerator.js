import { words } from "./wordstorage/wordData.js";

/**
 * -- INPUTS --
 * 1. [x] The function returns an empty string if there is no input.
 * 1. [x] The function should take a word input from a predefined list and return a random word.
 * 2. [x] The function should take a number input to decide length. 
 * 3. [] There should be an indication whether the same letter can appear more than once, or if it has to be unique.
 * 
 * -- FUNCTION --
 * 1. [x] The function chooses a random word from the list that has the same length as the number input.
 * 2. [x] Some form of error message if no words exist.
 *    Example: "A word of that length is not in the list, try again."
 */

export function generateRandomWord(wordLength, words) {
    if (!words || words.length === 0) {
        return '';
    } else if (wordLength === undefined) {
        return 'A word of that length is not in the list, try again.'
    } else if (!wordLength) {
        const randomIndex = Math.floor(Math.random() * words.length);
        console.log(words[randomIndex]);
        return words[randomIndex];
    }

    const filteredWords = words.filter((word) => word.length === wordLength);
    const randomFilteredIndex = Math.floor(Math.random() * filteredWords.length);

    return filteredWords.length === 0
        ? 'A word of that length is not in the list, try again.'
        : filteredWords[randomFilteredIndex];
}