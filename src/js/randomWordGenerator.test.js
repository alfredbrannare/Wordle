import { it, describe, expect } from '@jest/globals';

import { generateRandomWord } from "./randomWordGenerator.js";
import { mockWords } from './wordstorage/mockWordData.js';

describe('generateRandomWord function', () => {
    it('returns an empty string if there is no input', () => {
        const result = generateRandomWord('');

        expect(result).toEqual('');
    });

    it('returns a random word from a list', () => {
        const result = generateRandomWord(0, mockWords);

        expect(mockWords).toContain(result);
    });

    it('it takes a number input and returns a word of that length', () => {
        const result = generateRandomWord(5, mockWords);

        expect(result).toHaveLength(5)
        
    });

});