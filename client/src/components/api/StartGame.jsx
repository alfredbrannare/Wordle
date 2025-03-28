import { useState, useEffect } from 'react';

export default function StartGame({ wordLength, isUnique, onStartGame }) {
    const FetchRandomWord = async () => {
        try {
            const res = await fetch('http://localhost:5080/api/random-word', {
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
            return payload.data;
        } catch (error) {
            console.error("Error fetching the word:", error);
        }
    }

    return (
        <button
            type='submit'
            onClick={async () => {
                const word = await FetchRandomWord();
                onStartGame(word);
            }}
        >
            Start Game
        </button>
    )
}
