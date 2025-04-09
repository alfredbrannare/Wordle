export default function Grid({ wordLength, guesses, currentGuess }) {
    let boxes = [];

    for (let row = 0; row < 5; row++) {

        let rowBoxes = [];

        const shouldShowCurrentGuess = row === guesses.length && row < 5;

        for (let column = 0; column < wordLength; column++) {
            const letter = guesses[row] ? guesses[row][column] || "" : "";
            rowBoxes.push(
                <div key={`${row}-${column}`} className="letter-box">
                    {letter}
                </div>);
        }
        boxes.push(
            <div key={row} className="row">
                {rowBoxes}
            </div>
        );
    }

    return <div className="grid">{boxes}</div>;
}
