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
import NavBar from "./components/GUI/NavBar.jsx";
import GameWon from "./components/GUI/GameWon.jsx";
import ResetIcon from "./components/GUI/ResetIcon.jsx";
import GameLost from "./components/GUI/GameLost.jsx";
import RestartGame from "./components/GUI/RestartGame.jsx";
import LeaveGame from "./components/GUI/LeaveGame.jsx";
import { submitHighscore } from "./components/api/SubmitHighscore.jsx";


function App() {
  const [gameSettings, setGameSettings] = useState({
    isUnique: false,
    wordLength: 5,
  });
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [gameRestart, setGameRestart] = useState(false);
  const [leaveGame, setLeaveGame] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);
  const [correctWord, setCorrectWord] = useState('');

  const handleWin = (attempts) => {
    setAttemptsCount(attempts);
    setGameWon(true);
    setTimeTaken(Date.now() - startTime);
  };

  useEffect(() => {
    async function fetchGuesses() {
      const res = await fetch('/api/guesses');
      const data = await res.json();
      setGuesses(data || []);
    }
    fetchGuesses();
  }, []);

  const handleStartGame = async () => {
    await resetGame();
    setStartTime(Date.now());
    setGameStarted(true);
  };

  const resetGame = async () => {
    setGameStarted(false);
    setGuesses([]);
    setCurrentGuess("");
    setAttemptsCount(0);

    await fetch('api/guesses', {
      method: 'DELETE'
    });
  };

  return (
    <>
      <NavBar
        gameStarted={gameStarted}
        setLeaveGame={setLeaveGame}
        setPendingNavigation={setPendingNavigation}
      />
      <main className="flex flex-col items-center justify-center min-h-screen bg-base-200">
        <h1 className="text-5xl font-bold text-[#f72585]">Wordle</h1>
        {!gameStarted && (
          <>
            <div className="game-settings rounded-box border-4 border-[#f72585] border p-4 my-7 shadow-[0_4px_15px_rgba(255,0,255,0.2)]">
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
                setCorrectWord={setCorrectWord}
                gameWon={gameWon}
                currentGuess={currentGuess}
                wordLength={gameSettings.wordLength}
                onSuccessfulSubmit={(newGuess) => {
                  setGuesses(prev => [...prev, newGuess]);
                  setCurrentGuess("");
                }}
                onWin={handleWin}
              />
            </div>

            <div className="game-grid">
              <GameGrid
                guesses={guesses}
                wordLength={gameSettings.wordLength}
                currentGuess={currentGuess}
              />
            </div>

            <ResetIcon
              resetGame={resetGame}
              restartGame={RestartGame}
              setGameRestart={setGameRestart}
            />
          </>
        )}

        {gameWon && (
          <GameWon
            attemptsCount={attemptsCount}
            timeTaken={timeTaken}
            setGameWon={setGameWon}
            resetGame={resetGame}
            submitHighscore={submitHighscore}
            correctWord={correctWord}
          />
        )}

        {guesses.length >= 5 && !gameWon && (
          <GameLost
            setGameWon={setGameWon}
            resetGame={resetGame}
            correctWord={correctWord}
          />
        )}

        {gameRestart && (
          <RestartGame
            setGameWon={setGameWon}
            resetGame={resetGame}
            setGameRestart={setGameRestart}
          />
        )}

        {leaveGame && (
          <LeaveGame
            setGameWon={setGameWon}
            resetGame={resetGame}
            setLeaveGame={setLeaveGame}
            pendingNavigation={pendingNavigation}
            setPendingNavigation={setPendingNavigation}
          />
        )}
      </main>
    </>
  );
}


export default App;