"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GameIntro from "./GameIntro.jsx";
import GameBoard from "./GameBoard.jsx";

export default function NumberMindgame() {
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
      countdown = setInterval(() => setTimer((prev) => prev - 1), 700);
    } else if (timer === 0 && showNumber) {
      setShowNumber(false);
    }
    return () => clearInterval(countdown);
  }, [isPlaying, showNumber, timer]);

  const generateNumbers = (lvl) =>
    Array.from({ length: lvl }, () => Math.floor(Math.random() * 10)).join("");

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
      <GameIntro
        onStart={() => handleStart(1)}
        onReset={handleReset}
        gameOver={gameOver}
        level={level}
      />
    );
  }

  return (
    <GameBoard
      level={level}
      numberToRemember={numberToRemember}
      showNumber={showNumber}
      timer={timer}
      userInput={userInput}
      setUserInput={setUserInput}
      onCheck={handleCheck}
      onReset={handleReset}
    />
  );
}
