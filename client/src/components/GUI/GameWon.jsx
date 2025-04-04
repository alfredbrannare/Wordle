export default function GameWon({ attemptsCount, setGameWon, resetGame }) {
    const handleClose = async () => {
        await resetGame();
        setGameWon(false);
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations!</h3>
                <p className="py-4">
                    You guessed correctly in {attemptsCount} attempt{attemptsCount !== 1 ? 's' : ''}!
                </p>
                <div className="modal-action">
                    <button
                        onClick={handleClose}
                        className="btn btn-primary"
                    >
                        Play again!
                    </button>
                </div>
            </div>
        </div >
    )
}