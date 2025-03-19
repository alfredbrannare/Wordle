/**

1. [x] Create a function that takes in two strings: correct (the correct word) and guess (the guessed word).

2. [x] Check the length: If guess is the same length as correct.

3. Split the words into arrays of individual letters for easier iteration.

4. Create an empty list called result where each letter's status will be stored.

    4.1 [x] Loop through each letter in guess: If the letter is in the correct place → add { letter: X, result: "correct" } to result.

    4.2 [x] If the letter is in correct but in the wrong place → add { letter: X, result: "misplaced" }.

    4.3 [x] If the letter isn’t in correct at all → add { letter: X, result: "incorrect" }.

    4.4 [x] Some kind of logic for this example:
        "If the target word contains a letter multiple times, but the user guesses that letter more times than it appears, 
        the extra occurrences should be marked as "incorrect."

[x] Return the result array as the output of the function. */

export function evaluateGuess(correct, guess) {
    let correctArray = correct.toUpperCase().split('');
    let guessArray = guess.toUpperCase().split('');
    let result = [];
    let correctLetterCount = [];

    if (correctArray.length !== guessArray.length) {
        return 'Your word is ' + guessArray.length + ' characters long, but the correct word is ' + correctArray.length + ' characters long, try again!';
    }

    let remainingCorrectLetters = [...correctArray];

    for (let i = 0; i < guessArray.length; i++) {

        if (guessArray[i] === correctArray[i]) {
            result.push({ letter: guessArray[i], result: 'correct' });
            correctLetterCount.push(i);
            remainingCorrectLetters[i] = null;

        } else {
            result.push({ letter: guessArray[i], result: 'incorrect' });
        }
    }

    for (let i = 0; i < guessArray.length; i++) {
        if (result[i].result === 'incorrect') {
            let index = remainingCorrectLetters.indexOf(guessArray[i]);
            if (index !== -1) {
                result[i].result = 'misplaced';
                remainingCorrectLetters[index] = null;
            }
        }
    }

    console.log(result);
    console.log(correctLetterCount);

    return result;
}

evaluateGuess("CYKLA", "HALLÅa");