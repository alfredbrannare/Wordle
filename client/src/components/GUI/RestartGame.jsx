export default function RestartGame({ setGameWon, resetGame, setGameRestart }) {
    const handleReset = async () => {
        try {
            await resetGame();
        } catch (error) {
            console.error("Error resetting game:", error);
        }
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">You are about to reset the game.</h3>
                <p className="text-primary font-bold">All progress will be lost.</p>
                <p className="py-4">
                    Are you sure you want to restart the game?
                </p>
                <div className="modal-action flex justify-between">
                    <button
                        onClick={() => {
                            setGameRestart(false)
                        }}
                        className="btn btn-primary"
                    >
                        No
                    </button>

                    <button
                        onClick={() => {
                            handleReset()
                            setGameRestart(false)
                        }}
                        className="btn btn-dash btn-warning"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div >
    )
}