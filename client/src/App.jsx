import { useState, useEffect } from "react";
import "./App.css";
import WordLengthInput from "./components/GUI/WordLengthInput.jsx";
import UniqueWordInput from "./components/GUI/UniqueWordInput.jsx";
import TextInput from "./components/GUI/TextInput.jsx";
import SubmitGuess from "./components/GUI/SubmitGuess.jsx";
import Grid from "./components/GUI/Grid.jsx";
import StartGame from "./components/api/StartGame.jsx";
import GameGrid from "./components/GUI/GameGrid.jsx";
import FetchGuesses from "./components/api/FetchGuesses.jsx";

function App() {
  const [gameSettings, setGameSettings] = useState({
    isUnique: false,
    wordLength: 5,
  });
  const [currentGuess, setCurrentGuess] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    async function fetchGuesses() {
      const res = await fetch('/api/guesses');
      const data = await res.json();
      setGuesses(data || []);
    }
    fetchGuesses();
  }, []);

  const handleStartGame = () => {
    setGuesses([]);
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGuesses([]);
    setCurrentGuess("");
  };

  return (
    <main>
      <h1>Wordle</h1>
      {!gameStarted && (
        <>
          <div className="game-settings">
            <WordLengthInput
              currentLength={gameSettings.wordLength}
              onLengthChange={(newLength) =>
                setGameSettings(prevSettings => ({ ...prevSettings, wordLength: newLength }))
              }
              disabled={gameStarted}
            />

            <UniqueWordInput
              currentStatus={gameSettings.isUnique}
              onToggle={(toggle) => {
                setGameSettings(prevSettings => ({
                  ...prevSettings,
                  isUnique: toggle
                }));
              }}
              disabled={gameStarted}
            />

            <StartGame
              isUnique={gameSettings.isUnique}
              wordLength={gameSettings.wordLength}
              onStartGame={handleStartGame}
            />
          </div>
        </>
      )}


      {gameStarted && (
        <>
          <div className="game-controls">
            <TextInput
              wordLength={gameSettings.wordLength}
              currentGuess={currentGuess}
              setCurrentGuess={setCurrentGuess}
            />

            <SubmitGuess
              currentGuess={currentGuess}
              wordLength={gameSettings.wordLength}
              onSuccessfulSubmit={(newGuess) => {
                setGuesses(prev => [...prev, newGuess]);
                setCurrentGuess("");
              }}
            />
          </div>

          <div className="game-grid">
            <GameGrid
              guesses={guesses}
              wordLength={gameSettings.wordLength}
            />
          </div>

          <div className="reset-container">
            <button
              className="reset-button"
              onClick={resetGame}
            >
              Reset Game
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default App;