import { useEffect } from 'react';

export default function FetchGuesses({ setGuesses }) {
    useEffect(() => {
        (async () => {
            const res = await fetch('/api/guesses');
            const data = await res.json();
            setGuesses(data.guesses || []);
        })();
    }, [setGuesses]);

    return null;
}