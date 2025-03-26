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

export function generateRandomWord(wordLength, words, uniqueWords) {
    if (!words || words.length === 0) {
        return [];
    }

    if (wordLength === undefined && uniqueWords === undefined) {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    if (wordLength !== undefined && uniqueWords === undefined) {
        let filteredWords = words.filter((word) => word.length === wordLength);

        return filteredWords.length === 0
            ? 'A word of that length is not in the list, try again.'
            : filteredWords[Math.floor(Math.random() * filteredWords.length)];
    }

    if (wordLength !== undefined && uniqueWords === true) {
        let filteredWords = words.filter((word) => word.length === wordLength);
        filteredWords = filteredWords.filter((word) => new Set(word).size === word.length);

        return filteredWords.length === 0
            ? 'A word of that length with unique letters is not in the list, try again.'
            : filteredWords[Math.floor(Math.random() * filteredWords.length)];
    }

    if (uniqueWords === true) {
        let filteredWords = words.filter((word) => new Set(word).size === word.length);
        return filteredWords.length === 0
            ? 'No words with unique letters found.'
            : filteredWords[Math.floor(Math.random() * filteredWords.length)];
    }

    return [];
}