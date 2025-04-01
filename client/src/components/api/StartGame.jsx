import { useState, useEffect } from 'react';

export default function StartGame({ wordLength, isUnique, onStartGame }) {
    const FetchRandomWord = async () => {
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
            console.log(payload)
            onStartGame(payload);
            return payload;
        } catch (error) {
            console.error("Error fetching the word:", error);
        }
    }

    return (
        <button
            type='submit'
            className='start-game__button'
            onClick={async () => {
                const word = await FetchRandomWord();
                onStartGame(word);
            }}
        >
            Start Game
        </button>
    )
}
