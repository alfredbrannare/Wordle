export function generateRandomWord(wordLength, words, uniqueWords) {
    if (!words || words.length === 0) return [];

    let filteredWords = words;
    if (wordLength !== undefined) {
        filteredWords = filteredWords.filter(word => word.length === wordLength);
    }

    if (uniqueWords === true) {
        filteredWords = filteredWords.filter(word => new Set(word).size === word.length);
    }

    if (filteredWords.length === 0) {
        if (wordLength !== undefined && uniqueWords === true) {
            return 'A word of that length with unique letters is not in the list, try again.';
        } else if (wordLength !== undefined) {
            return 'A word of that length is not in the list, try again.';
        } else if (uniqueWords === true) {
            return 'No words with unique letters found.';
        } else {
            return 'No words found.';
        }
    }

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}
