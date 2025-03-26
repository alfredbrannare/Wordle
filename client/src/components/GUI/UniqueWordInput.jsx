export default function UniqueWordInput({ currentStatus, onToggle }) {
    const handleCheckboxChange = (e) => {
        onToggle(e.target.checked);
    };

    return (
        <div className="unique-word-input">
            <label htmlFor="unique-words-checkbox" className="unique-word-input__label">
                Unique Words
            </label>
            <input
                type="checkbox"
                id="unique-words-checkbox"
                className="unique-word-input__checkbox"
                checked={currentStatus}
                onChange={handleCheckboxChange}
            />
        </div>
    );
}
