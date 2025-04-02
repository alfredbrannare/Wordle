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

  useEffect(() => {
    async function fetchGuesses() {
      const res = await fetch('/api/guesses');
      const data = await res.json();
      setGuesses(data || []);
    }
    fetchGuesses();
  }, []);

  return (
    <main>
      <StartGame
        isUnique={gameSettings.isUnique}
        wordLength={gameSettings.wordLength}
        onStartGame={() => setGuesses([])}
      />

      <h1>Wordle</h1>
      <div className="game-controls">
        <WordLengthInput
          currentLength={gameSettings.wordLength}
          onLengthChange={(newLength) =>
            setGameSettings(prevSettings => ({ ...prevSettings, wordLength: newLength }))
          }
        />

        <UniqueWordInput
          currentStatus={gameSettings.isUnique}
          onToggle={(toggle) => {
            setGameSettings(prevSettings => ({
              ...prevSettings,
              isUnique: toggle
            }));
          }}
        />

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
        />
      </div>
    </main>
  );
}

export default App;