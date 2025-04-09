export default function UniqueWordInput({ currentStatus, onToggle }) {
    const handleCheckboxChange = (e) => {
        onToggle(e.target.checked);
    };

    return (
        <div className="flex flex-col items-center justify-center my-4">
            <label htmlFor="unique-words-checkbox" className="label text-success">
                Unique Words
            </label>
            <input
                type="checkbox"
                id="unique-words-checkbox"
                className="toggle toggle-success my-1 hover:shadow-[0_4px_25px_rgba(0,211,187,0.31)] transition-all duration-300"
                checked={currentStatus}
                onChange={handleCheckboxChange}
            />
        </div>
    );
}
