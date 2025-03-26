import { useState } from 'react';

export default function WordLengthInput({ currentLength, onLengthChange }) {
    const [localLength, setLocalLength] = useState(currentLength);

    return (
        <div className="word-length-input">
            <label htmlFor="word-length" className="word-length-input__label">
                Choose length
            </label>
            <input
                type="number"
                id="word-length"
                className="word-length-input__input"
                value={localLength}
                onChange={(e) => {
                    const newLength = parseInt(e.target.value, 10) || 0;
                    setLocalLength(newLength);
                    onLengthChange(newLength);
                }}
            />
        </div>
    );
}
