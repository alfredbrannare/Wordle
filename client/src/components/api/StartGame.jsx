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
                className='btn btn-xl btn-outline btn-success'
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
