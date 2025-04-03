export default function UniqueWordInput({ currentStatus, onToggle }) {
    const handleCheckboxChange = (e) => {
        onToggle(e.target.checked);
    };

    return (
        <div className="flex flex-col items-center justify-center my-4">
            <label htmlFor="unique-words-checkbox" className="unique-word-input__label">
                Unique Words
            </label>
            <input
                type="checkbox"
                id="unique-words-checkbox"
                className="toggle toggle-success my-1"
                checked={currentStatus}
                onChange={handleCheckboxChange}
            />
        </div>
    );
}
