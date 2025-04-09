import { useState, useEffect } from 'react';

export default function StartGame({ wordLength, isUnique, onStartGame }) {
    const initGame = async () => {
        try {
            const res = await fetch('/api/words/random', {
                method: "POST",
                body: JSON.stringify({
                    wordLength: wordLength,
                    uniqueWords: isUnique
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            const payload = await res.json();
            return payload;
        } catch (error) {
            console.error("Error fetching the word:", error);
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <button
                type='submit'
                className='btn btn-xl btn-outline text-success border-success shadow-[0_1px_15px_rgba(0,211,187,0.31)] hover:shadow-[0_1px_25px_rgba(0,211,187,0.31)] transition-all duration-300'
                onClick={async () => {
                    const word = await initGame();
                    onStartGame(word);
                }}
            >
                Start Game
            </button>
        </div>
    )
}
