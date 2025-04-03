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
    <main className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-5xl font-bold text-success">Wordle</h1>
      {!gameStarted && (
        <>
          <div className="game-settings rounded-box border-4 border p-4 my-7">
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
          <div className="game-controls flex flex-col justify-center text-center">
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
              currentGuess={currentGuess}
            />
          </div>

          <div className="reset-container mt-3"
            onClick={resetGame}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f2ef27" className="size-6">
              <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
            </svg>
          </div>
        </>
      )}
    </main>
  );
}


export default App;