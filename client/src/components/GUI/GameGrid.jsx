export default function GameGrid({ guesses, wordLength }) {
    let emptyRows = 5 - guesses.length;
    let totalRows = [];

    for (let rows = 0; rows < 5; rows++) {
        let row = [];

        const currentGuess = guesses[rows];

        for (let col = 0; col < wordLength; col++) {
            if (currentGuess) {
                const letterObj = currentGuess[col];
                row.push(
                    <span key={col} className={`letter-box ${letterObj.result}`}>
                        {letterObj.letter}
                    </span>
                );
            } else {
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
