"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Mindgame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [level, setLevel] = useState(1);
  const [numberToRemember, setNumberToRemember] = useState("");
  const [userInput, setUserInput] = useState("");
  const [showNumber, setShowNumber] = useState(true);
  const [timer, setTimer] = useState(5);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let countdown;
    if (isPlaying && showNumber && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && showNumber) {
      setShowNumber(false);
    }
    return () => clearInterval(countdown);
  }, [isPlaying, showNumber, timer]);

  const generateNumbers = (lvl) => {
    let nums = [];
    for (let i = 0; i < lvl; i++) {
      nums.push(Math.floor(Math.random() * 10));
    }
    return nums.join("");
  };

  const handleStart = (currentLevel = 1) => {
    const newNumber = generateNumbers(currentLevel);
    setNumberToRemember(newNumber);
    setShowNumber(true);
    setUserInput("");
    setIsPlaying(true);
    setTimer(5);
    setGameOver(false);
  };

  const handleCheck = () => {
    if (userInput === numberToRemember) {
      const nextLevel = level + 1;
      setLevel(nextLevel);
      handleStart(nextLevel);
    } else {
      setIsPlaying(false);
      setGameOver(true);
      setLevel(1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setLevel(1);
    setUserInput("");
    setNumberToRemember("");
    setShowNumber(true);
    setTimer(5);
    setGameOver(false);
  };

  if (!isPlaying) {
    return (
      <div className="bg-card flex flex-col gap-5 rounded-xl border p-8 text-center bg-gradient-to-br from-purple-800 to-pink-800">
        <h1 className="text-2xl font-bold text-white">Number Memory</h1>
        <p className="mb-8 text-white">Memorize the number and type it back!</p>
        {gameOver && (
          <h2 className="text-lg text-white">
            Game Over! You reached your limit.
          </h2>
        )}
        <div className="flex justify-center gap-3">
          <Button onClick={() => handleStart(1)}>Start Game</Button>
          {gameOver && <Button onClick={handleReset}>Reset</Button>}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card flex flex-col gap-5 rounded-xl border p-8 text-center bg-gradient-to-br from-purple-800 to-pink-800 min-h-[230px] min-w-[345px] justify-center">
      <h1 className="text-2xl font-semibold text-white">Level {level}</h1>

      {showNumber ? (
        <>
          <h2 className="text-xl font-mono text-white">{numberToRemember}</h2>
          <p
            className={`bg-white h-2 rounded-xl duration-1000 ease-linear ${timer === 5 ? 'w-full' : timer === 4 ? 'w-4/5' : timer === 3  ? 'w-3/5' : timer === 2 ? 'w-2/5' : 'w-1/5'}`}></p>
        </>
      ) : (
        <>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter the number"
            className="border border-gray-400 p-2 rounded text-white text-center"
          />
          <div className="flex justify-center gap-3">
            <Button onClick={handleCheck}>Submit</Button>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
