import { useState, useEffect } from "react";
import "./App.css";
import WordLengthInput from "./components/GUI/WordLengthInput.jsx";
import UniqueWordInput from "./components/GUI/UniqueWordInput.jsx";
import TextInput from "./components/GUI/TextInput.jsx";
import SubmitGuess from "./components/GUI/SubmitGuess.jsx";
import Row from "./components/GUI/Row.jsx";
import StartGame from "./components/api/StartGame.jsx";

function App() {
  const [gameSettings, setGameSettings] = useState({
    guesses: [],
    isUnique: false,
    wordLength: 5,
  });
  const [currentGuess, setCurrentGuess] = useState("");
  const [correctWord, setCorrectWord] = useState("");

  return (
    <main>
      <StartGame
        isUnique={gameSettings.isUnique}
        wordLength={gameSettings.wordLength}
        onStartGame={(randomWord) => {
          setCorrectWord(randomWord)
        }}
      />

      <h1>Wordle</h1>
      <p>Unique: {gameSettings.isUnique ? 'True' : 'False'}</p>

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
          setGameSettings={setGameSettings}
          setCurrentGuess={setCurrentGuess}
        />
      </div>

      <Row
        wordLength={gameSettings.wordLength}
        guesses={gameSettings.guesses}
      />

      <ul>
        {gameSettings.guesses.map((guess, index) => (
          <li key={index}>{guess}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;