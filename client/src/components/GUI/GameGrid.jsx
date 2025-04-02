export default function GameGrid({ guesses, wordLength, currentGuess }) {
    let totalRows = [];

    for (let rows = 0; rows < 5; rows++) {
        let row = [];
        const thisGuess = guesses[rows];

        if (thisGuess) {
            for (let col = 0; col < wordLength; col++) {
                const letterObj = thisGuess[col];
                row.push(
                    <span key={col} className={`letter-box ${letterObj.result}`}>
                        {letterObj.letter}
                    </span>
                );
            }
        }

        else if (currentGuess && rows === guesses.length) {
            for (let col = 0; col < wordLength; col++) {
                const letter = currentGuess[col] || '';
                row.push(
                    <span key={col} className={`letter-box ${letter ? 'current' : 'empty'}`}>
                        {letter}
                    </span>
                );
            }
        }

        else {
            for (let col = 0; col < wordLength; col++) {
                row.push(
                    <span key={col} className="letter-box empty"></span>
                );
            }
        }

        totalRows.push(
            <div key={`guess-${rows}`} className="row">
                {row}
            </div>
        );
    }

    return (
        <div>
            {totalRows}
        </div>
    );
}