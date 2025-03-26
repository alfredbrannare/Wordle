import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import TextInput from "./components/GUI/TextInput.jsx";
import WordLengthInput from "./components/GUI/WordLengthInput.jsx";
import UniqueWordInput from "./components/GUI/UniqueWordInput.jsx";

function App() {
  const [gameSettings, setGameSettings] = useState({
    guesses: [],
    isUnique: false,
    wordLength: 5,
  });

  return (
    <main>
      <h1>Wordle</h1>
      <p>Unique: {gameSettings.isUnique ? 'True' : 'False'}</p>
      <form>
        <WordLengthInput
          currentLength={gameSettings.wordLength}
          onLengthChange={(newLength) =>
            setGameSettings(prev => ({ ...prev, wordLength: newLength }))
          }
        />
        <TextInput
          wordLength={gameSettings.wordLength}
          onSubmitGuess={(newGuess) => {
            setGameSettings(prevSettings => ({
              ...prevSettings,
              guesses: [...prevSettings.guesses, newGuess]
            }));
          }}
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

        <ul>
          {gameSettings.guesses.map((guess, index) => (
            <li key={index}>{guess}</li>
          ))}
        </ul>
      </form>
    </main>
  );
}

export default App;
