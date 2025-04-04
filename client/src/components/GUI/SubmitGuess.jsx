export default function SubmitGuess({ currentGuess, wordLength, onSuccessfulSubmit, onWin }) {
    const handleSubmit = async (e) => {
        if (currentGuess.length !== wordLength) {
            console.log('Nope');
            return;
        }

        try {
            const res = await fetch('/api/guesses', {
                method: "POST",
                body: JSON.stringify({
                    guessWord: currentGuess
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            const payload = await res.json();
            console.log("Received payload:", payload);

            if (payload && typeof onSuccessfulSubmit === 'function') {
                onSuccessfulSubmit(payload[payload.length - 1]);

                const latestGuess = payload[payload.length - 1];
                const isCorrect = latestGuess.every(letter => letter.result === 'correct');
                const attempts = payload.length;

                if (isCorrect && attempts <= 5 && typeof onWin === 'function') {
                    onWin(attempts);
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
            className="btn btn-outline btn-success my-4"
        >
            Guess
        </button>
    )
}