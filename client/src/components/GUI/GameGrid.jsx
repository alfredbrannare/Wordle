export default function GameGrid({ guesses }) {
    return (
        <div>
            {guesses.map((guess, guessIndex) => (
                <div key={guessIndex} className="row">
                    {guess.map((letterObj, letterIndex) => (
                        <span key={letterIndex} className={`letter-box ${letterObj.result}`}>{letterObj.letter} </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
