import { it, describe, expect } from '@jest/globals';

import { evaluateGuess } from "./gameLogic.js";

describe('evaluateGuess function', () => {
    it('displays a message if the guess input is not the same length as the correct input', () => {
        const correctWord = 'Hej';
        const guessWord = 'Hejsan';

        const result = evaluateGuess(correctWord, guessWord);

        const expectedResult = `Your word is ${guessWord.length} characters long, but the correct word is ${correctWord.length} characters long, try again!`;

        expect(result).toEqual(expectedResult);
    });

    it('returns the correct, misplaced, and incorrect results for a guess', () => {
        const result = evaluateGuess('Hej', 'Hja');

        const expectedResult = [
            { letter: 'H', result: 'correct'},
            { letter: 'J', result: 'misplaced'},
            { letter: 'A', result: 'incorrect'},
        ];

        expect(result).toEqual(expectedResult);
    });

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

    it('handles empty strings correctly', () => {
        const result = evaluateGuess('', '');
        const expectedResult = [];
        expect(result).toEqual(expectedResult);
    });
})