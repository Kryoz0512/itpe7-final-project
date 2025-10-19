"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import GameCard from "./GameCard";
import GuessInput from "./GuessInput";
import GuessHistory from "./GuessHistory";

export default function HighLowGame() {
  const [target, setTarget] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100!");
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setTarget(randomNum);
  }, []);

  if (target === null) {
    return (
      <GameCard>
        <h1 className="text-2xl font-bold text-white">Loading game...</h1>
      </GameCard>
    );
  }

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      setMessage("Please enter a valid number between 1 and 100!");
      return;
    }

    setAttempts((prev) => prev + 1);
    setHistory((prev) => [...prev, userGuess]);

    if (userGuess === target) {
      setMessage(`Correct! The number was ${target}.`);
      setIsGameOver(true);
    } else if (userGuess < target) {
      setMessage("Too low! Try a higher number.");
    } else {
      setMessage("Too high! Try a lower number.");
    }

    setGuess("");
  };

  const handleRestart = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("Guess a number between 1 and 100!");
    setAttempts(0);
    setHistory([]);
    setIsGameOver(false);
  };

  return (
    <GameCard>
      <h1 className="text-2xl font-bold text-white">Number Guessing Game</h1>

      <AnimatePresence mode="wait">
        <motion.p
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-white text-base"
        >
          {message}
        </motion.p>
      </AnimatePresence>

      {!isGameOver ? (
        <>
          <GuessInput
            guess={guess}
            onGuessChange={setGuess}
            onSubmit={handleGuess}
            onRestart={handleRestart}
          />
          {history.length > 0 && <GuessHistory history={history} />}
        </>
      ) : (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-5"
        >
          <p className="text-lg font-medium text-green-300">
            You guessed the number <span className="font-bold">{target}</span> in{" "}
            <span className="font-bold">{attempts}</span> tries!
          </p>
          <Button
            onClick={handleRestart}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Play Again
          </Button>

          {history.length > 0 && <GuessHistory history={history} />}
        </motion.div>
      )}
    </GameCard>
  );
}
