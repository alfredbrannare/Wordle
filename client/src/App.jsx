import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import TextInput from "./components/GUI/TextInput.jsx";
import WordLengthInput from "./components//GUI/WordLenghtInput.jsx";
import UniqueWordInputs from "./components/GUI/UniqueWordInput.jsx";

function App() {
  const [input, setInput] = useState("");
  const [wordLength, setWordLength] = useState("Random");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <h1>Wordle</h1>
      <div>
        <WordLengthInput
          length={wordLength}
          onChange={(e) => setWordLength(e.target.value)}
        />
        <TextInput
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
        />
        <UniqueWordInputs
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
    </>
  );
}

export default App;
