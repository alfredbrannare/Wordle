import { it, describe, expect } from '@jest/globals';

import { generateRandomWord } from "./randomWordGenerator.js";
import { mockWords } from '../wordstorage/mockWordData.js';

/**
 * Test strategy for the generateRandomWord-function:
 * 1. Handling empty inputs
 * - Test that the function handles empty strings correctly.
 *   If there is no input it should return an empty array.
 * 
 * 2. Returns a random word from an array
 * - Tests that the function correctly returns a random word from an array.
 * 
 * 3. Handling word length input
 * - Tests that the function returns a word of the same length as the input.
 *  Example: If user types '5' it should return a word that is 5 characters long.
 * 
 * 4. Handling of error if no words exist
 * - Tests that the function displays the error message "A word of that length is not in the list, try again."
 *   If no words of inserted length exist in the array.
 * 
 * 5. Returns unique words if unique input is true
 * - Test that the function correctly displays unique words that doesn't have the same character
 *   twice in the word.
 *   For example: If the user 'checks' unique words checkbox. Only unique words should appear.
 */

describe('generateRandomWord function', () => {
    // Test 1: Handling empty inputs
    it('returns an empty array if there is no input', () => {
        const result = generateRandomWord(undefined, undefined);

        expect(result).toEqual([]);
    });

    // Test 2: Returns random word
    it('returns a random word from a list', () => {
        const result = generateRandomWord(undefined, mockWords);

        expect(mockWords).toContain(result);
    });

    // Test 3: Handling word length 
    it('it takes a number input and returns a word of that length', () => {
        const result = generateRandomWord(5, mockWords);

        expect(result).toHaveLength(5)
    });

    // Test 4: Handling of error
    it('displays an error message if a word of that length does not exist', () => {
        const result = generateRandomWord(2, mockWords);
        const expectedResult = 'A word of that length is not in the list, try again.';

        expect(result).toEqual(expectedResult);
    });

    // Test 5: Handling unique words
    it('displays unique words (only one of each letter once) if true', () => {
        const uniqueWords = [
            "bridge",
            "planet",
            "winter",
            "journey"
        ];

        const result = generateRandomWord(6, mockWords, true);

        expect(uniqueWords).toContain(result);
    })
});