export default function GameLost({ setGameWon, resetGame, correctWord }) {
    const handleClose = async () => {
        await resetGame();
        setGameWon(false);
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Sorry!</h3>
                <p className="py-4">
                    You did not guess the correct word...
                </p>
                <p>The correct word was <strong>{correctWord}</strong>.</p>
                <div className="modal-action">
                    <button
                        onClick={() => {
                            setGameWon(false)
                            resetGame();
                        }}
                        className="btn btn-primary"
                    >
                        Play again!
                    </button>
                </div>
            </div>
        </div >
    )
}