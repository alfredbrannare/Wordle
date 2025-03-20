import { it, describe, expect } from '@jest/globals';
import { evaluateGuess } from "./gameLogic.js";

/**
 * Test strategy for the evaluteGuess-function:
 * 1. Handling Different Lengths
 * - Tests that the function returns an appropriate message if the inputs have different lengths.
 *   For example typing 'Hejsan' when the correct word is 'Hej' the message should contain: 
 *   -'Your word is 6 characters long, but the correct word is 3 characters long, try again!'
 * 
 * 2. Handling inputs
 * - Tests that the function correctly identifies correct, misplaced and incorrect letters.
 *   For example 'HJA' should contain:
 *   - H as correct
 *   - J as misplaced
 *   - A as incorrect
 * 
 * 3. Handling duplicate letters
 * - Tests that the function handles cases where a letter appears more times in the guess than in the correct word.
 *   Example: Guessing "Maaa" against the correct word "Mama" should mark the extra 'A's as incorrect.
 * 
 * 4. Case insensitivity:
 * - Tests that the function is case-insensitive, meaning it ignores uppercase and lowercase differences.
 *   For example guessing "hello" against the correct word "HeLLo" should mark all letters as correct.
 * 
 * 5. Empty strings
 * - Test that the function handles empty strings correctly.
 *   For example guessing "" against the correct word "" should return an empty array.
 */

describe('evaluateGuess function', () => {
    // Test 1: Handling if the inputs have different lengths
    it('displays a message if the guess input is not the same length as the correct input', () => {
        const correctWord = 'Hej';
        const guessWord = 'Hejsan';

        const result = evaluateGuess(correctWord, guessWord);

        const expectedResult = `Your word is ${guessWord.length} characters long, but the correct word is ${correctWord.length} characters long, try again!`;

        expect(result).toEqual(expectedResult);
    });

    // Test 2: Handling inputs
    it.each([
        ['Hej', 'Hej', [
            { letter: 'H', result: 'correct' },
            { letter: 'E', result: 'correct' },
            { letter: 'J', result: 'correct' }
        ]],
        ['Hej', 'Jhe', [
            { letter: 'J', result: 'misplaced' },
            { letter: 'H', result: 'misplaced' },
            { letter: 'E', result: 'misplaced' }
        ]],
        ['Hej', 'Lol', [
            { letter: 'L', result: 'incorrect' },
            { letter: 'O', result: 'incorrect' },
            { letter: 'L', result: 'incorrect' }
        ]],
        ['Hej', 'Hja', [
            { letter: 'H', result: 'correct' },
            { letter: 'J', result: 'misplaced' },
            { letter: 'A', result: 'incorrect' }
        ]],
    ])('evaluates guess for "%s" against "%s"', (correctWord, guessWord, expectedResult) => {
        const result = evaluateGuess(correctWord, guessWord);
        expect(result).toEqual(expectedResult);
    });

    // Test 3: Handling duplicate letters
    it('marks extra occurrences of a letter as incorrect when the correct word has fewer instances', () => {
        const result = evaluateGuess('Mama', 'Maaa');
    
        const expectedResult = [
            { letter: 'M', result: 'correct' },
            { letter: 'A', result: 'correct' },
            { letter: 'A', result: 'incorrect' },
            { letter: 'A', result: 'correct' },
        ];
    
        expect(result).toEqual(expectedResult);
    });

    // Test 4: Case insensitivity
    it('is case insensitive when comparing letters', () => {
        const result = evaluateGuess('HeLLo', 'hello');
    
        const expectedResult = [
            { letter: 'H', result: 'correct' },
            { letter: 'E', result: 'correct' },
            { letter: 'L', result: 'correct' },
            { letter: 'L', result: 'correct' },
            { letter: 'O', result: 'correct' },
        ];
    
        expect(result).toEqual(expectedResult);
    });

    // Test 5: Empty strings
    it('handles empty strings correctly', () => {
        const result = evaluateGuess('', '');
        const expectedResult = [];
        expect(result).toEqual(expectedResult);
    });
})