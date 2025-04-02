import { useState, useEffect } from 'react';

export default function TextInput({ wordLength, currentGuess, setCurrentGuess }) {
    const handleChange = (e) => {
        const inputValue = e.target.value.toUpperCase();

        if (inputValue.length <= wordLength) {
            setCurrentGuess(inputValue);
        }
    };

    return (
        <div className="text-input">
            <label htmlFor="guess-input" className="text-input__label">
                Guess:
            </label>
            <input
                type="text"
                id="guess-input"
                className="text-input__input"
                value={currentGuess}
                maxLength={wordLength}
                onChange={handleChange}
            />
            <div className='currentGuess__container'>
                {currentGuess.split("").map((letter, index) => (
                    <div key={index} className='currentGuess__letter'>
                        <span>{letter}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}