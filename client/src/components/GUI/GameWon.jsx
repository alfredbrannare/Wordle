import { useState } from "react";

export default function GameWon({ attemptsCount, timeTaken, setGameWon, resetGame, submitHighscore, correctWord }) {
    const [username, setUsername] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleClose = async () => {
        await resetGame();
        setGameWon(false);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await submitHighscore({ name: username, guesses: attemptsCount, time: timeTaken, word: correctWord });
            setHasSubmitted(true);
        } catch (error) {
            console.error('Error submitting high score:', error);
        }
    }

    return (
        <div className="modal modal-open">
            <div className="modal-box flex flex-col">
                <h3 className="font-bold text-lg">Congratulations!</h3>
                <p className="py-4">
                    You guessed <strong>{correctWord}</strong> correctly in <strong>{(timeTaken / 1000).toFixed(2)}</strong> seconds and <strong>{attemptsCount}</strong> attempt{attemptsCount !== 1 ? 's' : ''}!
                </p>

                <div className="modal-action mt-auto flex flex-row justify-between items-end">
                    <div className="flex flex-col">
                        {hasSubmitted ? (
                            <p>Your result has been submitted!</p>
                        ) : (
                            <>
                                <label htmlFor="username">Submit your result!</label>
                                <input
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    className="input input-bordered my-1"
                                />
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="btn btn-success mt-2"
                                    disabled={!username.trim()}
                                >
                                    Post
                                </button>
                            </>
                        )}
                    </div>
                    <button
                        onClick={handleClose}
                        className="btn btn-primary"
                    >
                        Play again!
                    </button>
                </div>
            </div>
        </div>
    );
}