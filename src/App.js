import React, { useState } from "react";

function App() {
  const inputValue = ["rock", "paper", "scissors"];

  const [compValue, setCompValue] = useState(null);
  const [usersChoice, setUsersChoice] = useState(null);
  const [result, setResult] = useState("");

  const getRandomValue = () => {
    const opValue = Math.floor(Math.random() * inputValue.length);
    return inputValue[opValue];
  };

  const calculateResult = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  const getValue = (item) => {
    const computerValue = getRandomValue();
    setCompValue(computerValue);
    setUsersChoice(item);
    calculateResult(item, computerValue);
  };

  const resetValues = () => {
    setCompValue(null);
    setUsersChoice(null);
    setResult("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500">
      <h1 className="bg-blue-200 p-4 mb-4 text-xl font-bold rounded">
        Rock, Paper, Scissors
      </h1>

      <div className="flex bg-yellow-100 p-4 rounded-md">
        <span className="text-blue-700 mr-4">Computer Value: {compValue}</span>
        <span className="text-green-700 mr-4">Users Choice: {usersChoice}</span>
        <span className="text-red-700">Result: {result}</span>
      </div>

      <div className="grid grid-cols-3 gap-4 place-content-center mt-10">
        {inputValue.map((item) => (
          <button
            className="bg-blue-600 text-white p-4 rounded-full w-24 h-24"
            onClick={() => getValue(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        className="bg-red-600 text-white p-4 w-52 h-24 mt-10 rounded-md "
        onClick={() => resetValues()}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
