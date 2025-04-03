export default function GameGrid({ guesses, wordLength, currentGuess }) {
    let totalRows = [];

    for (let rows = 0; rows < 5; rows++) {
        let row = [];
        const thisGuess = guesses[rows];

        if (thisGuess) {
            for (let col = 0; col < wordLength; col++) {
                const letterObj = thisGuess[col];
                row.push(
                    <span
                        key={col}
                        className={`letter-box w-12 h-12 md:w-14 md:h-14 flex items-center justify-center 
                                  text-2xl font-bold uppercase border-2 rounded ${letterObj.result}`}
                    >
                        {letterObj.letter}
                    </span>
                );
            }
        }
        else if (currentGuess && rows === guesses.length) {
            for (let col = 0; col < wordLength; col++) {
                const letter = currentGuess[col] || '';
                row.push(
                    <span
                        key={col}
                        className={`letter-box w-12 h-12 md:w-14 md:h-14 flex items-center justify-center 
                                   text-2xl font-bold uppercase border-2 rounded 
                                   ${letter ? 'border-primary' : 'border-primary/30'}`}
                    >
                        {letter}
                    </span>
                );
            }
        }
        else {
            for (let col = 0; col < wordLength; col++) {
                row.push(
                    <span
                        key={col}
                        className="letter-box w-12 h-12 md:w-14 md:h-14 flex items-center justify-center 
                                 text-2xl font-bold uppercase border-2 border-primary/30 rounded"
                    ></span>
                );
            }
        }

        totalRows.push(
            <div key={`guess-${rows}`} className="flex gap-2 justify-center">
                {row}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {totalRows}
        </div>
    );
}