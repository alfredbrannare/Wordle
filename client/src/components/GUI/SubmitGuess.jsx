export default function SubmitGuess({ setCorrectWord, gameWon, currentGuess, wordLength, onSuccessfulSubmit, onWin }) {
    const handleSubmit = async (e) => {
        if (currentGuess.length !== wordLength) {
            return;
        }

        try {
            const res = await fetch('/api/guesses', {
                method: "POST",
                body: JSON.stringify({
                    guessWord: currentGuess,
                    gameState: gameWon
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            const payload = await res.json();

            if (payload) {
                const guessesArray = payload.guesses || payload;

                if (typeof onSuccessfulSubmit === 'function') {
                    onSuccessfulSubmit(guessesArray[guessesArray.length - 1]);

                    const latestGuess = guessesArray[guessesArray.length - 1];
                    const isCorrect = latestGuess.every(letter => letter.result === 'correct');
                    const attempts = guessesArray.length;

                    if (isCorrect && attempts <= 5 && typeof onWin === 'function') {
                        onWin(attempts);
                    }

                    if (payload.correctWord) {
                        setCorrectWord(payload.correctWord);
                    }
                }
            }

            return payload;
        } catch (error) {
            console.error('Error validating word:', error);
            return [];
        }
    }

    return (
        <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-outline btn-success my-4 hover:shadow-[0_4px_25px_rgba(0,211,187,0.31)] transition-all duration-300"
        >
            Guess
        </button>
    )
}