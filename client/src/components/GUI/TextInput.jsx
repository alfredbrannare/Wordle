import { useState, useEffect } from 'react';

export default function TextInput({ wordLength, currentGuess, setCurrentGuess }) {
    const handleChange = (e) => {
        const inputValue = e.target.value.toUpperCase();

        if (inputValue.length <= wordLength) {
            setCurrentGuess(inputValue);
        }
    };

    return (
        <div className="text-input mt-7">
            <input
                type="text"
                id="guess-input"
                className="input text-center py-4"
                value={currentGuess}
                maxLength={wordLength}
                placeholder={`Enter a guess of ${wordLength} words`}
                onChange={handleChange}
            />
        </div>
    );
}