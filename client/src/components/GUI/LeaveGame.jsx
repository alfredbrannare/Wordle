export default function LeaveGame({ setLeaveGame, resetGame, setGameRestart }) {
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
                <h3 className="font-bold text-lg">You are about to leave the game.</h3>
                <p className="text-primary font-bold">All progress will be lost.</p>
                <p className="py-4">Are you sure you want to leave?</p>
                <div className="modal-action flex justify-between">
                    <button
                        onClick={() => setLeaveGame(false)}
                        className="btn btn-primary"
                    >
                        No
                    </button>
                    <button
                        onClick={async () => {
                            await handleReset();
                            setLeaveGame(false);
                        }}
                        className="btn btn-dash btn-warning"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}