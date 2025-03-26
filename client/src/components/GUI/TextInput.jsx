import { useState } from 'react';

export default function TextInput({ wordLength, onSubmitGuess }) {
    const [guess, setGuess] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className="text-input">
            <label htmlFor="guess-input" className="text-input__label">
                Guess:
            </label>
            <input
                type="text"
                id="guess-input"
                className="text-input__input"
                value={guess}
                maxLength={wordLength}
                onChange={(ev) => {
                    setGuess(ev.target.value.toUpperCase());
                }}
            />
        </div>
    );
}
