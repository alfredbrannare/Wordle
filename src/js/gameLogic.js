/**

1. [x] Create a function that takes in two strings: correct (the correct word) and guess (the guessed word).

2. [-] Check the length: If either of the strings is longer than 5 characters, return an error message.

3. Split the words into arrays of individual letters for easier iteration.

4. Create an empty list called result where each letter's status will be stored.

    4.1 [x] Loop through each letter in guess: If the letter is in the correct place → add { letter: X, result: "correct" } to result.

    4.2 [x] If the letter is in correct but in the wrong place → add { letter: X, result: "misplaced" }.

    4.3 [x] If the letter isn’t in correct at all → add { letter: X, result: "incorrect" }.

    4.4 [] Some kind of logic for this example:
        "If the target word contains a letter multiple times, but the user guesses that letter more times than it appears, 
        the extra occurrences should be marked as "incorrect."

[] Return the result array as the output of the function. */

function evaluateGuess(correct, guess) {
    let correctArray = correct.toLowerCase().split('');
    let guessArray = guess.toLowerCase().split('');
    let result = [];

    for (let i = 0; i < correctArray.length; i++) {
        if (correctArray[i] === guessArray[i]) {
            result.push({ letter: guessArray[i], result: 'correct' });
        } else if (correctArray[i] !== guessArray[i] && correctArray.includes(guessArray[i])) {
            result.push({ letter: guessArray[i], result: 'misplaced' });
        } else {
            result.push({ letter: guessArray[i], result: 'incorrect' });
        }
    }

    console.log(result);
};

evaluateGuess("Hallå", "Allla");
