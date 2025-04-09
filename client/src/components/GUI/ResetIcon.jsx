export default function ResetIcon({ resetGame, setGameRestart }) {
    const handleReset = async () => {
        setGameRestart(true)
    };

    return (
        <div
            className="reset-container mt-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleReset}
            title="Reset Game"
            aria-label="Reset Game"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#00d3bb"
                className="size-6 hover:shadow-[0_4px_25px_rgba(0,211,187,0.31)] transition-all duration-300"
            >
                <path
                    fillRule="evenodd"
                    d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
}