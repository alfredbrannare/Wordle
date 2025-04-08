export default function GameWon({ attemptsCount, timeTaken, setGameWon, resetGame }) {
    const handleClose = async () => {
        await resetGame();
        setGameWon(false);
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box flex flex-col">
                <h3 className="font-bold text-lg">Congratulations!</h3>
                <p className="py-4">
                    You guessed correctly in {(timeTaken / 1000).toFixed(2)} seconds and {attemptsCount} attempt{attemptsCount !== 1 ? 's' : ''}!
                </p>

                <div className="modal-action mt-auto flex flex-row justify-between items-end">
                    <div className="flex flex-col">
                        <p>Submit your result!</p>
                        <input placeholder="Enter username" className="input input-bordered my-1" />
                        <button type="submit" className="btn btn-success">Post</button>
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

    )
}