export default function SubmitGuess({ currentGuess, wordLength, onSuccessfulSubmit }) {
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
            className="submit-guess-button"
        >
            Guess
        </button>
    )
}