"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GuessNumberGame() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100!");
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [history, setHistory] = useState([]);

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      setMessage("Please enter a valid number between 1 and 100!");
      return;
    }

    setAttempts(prev => prev + 1);
    setHistory(prev => [...prev, userGuess]);

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

  const restartGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("Guess a number between 1 and 100!");
    setAttempts(0);
    setHistory([]);
    setIsGameOver(false);
  };

  return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="max-w-md w-full shadow-2xl rounded-2xl p-6">
          <CardContent className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-bold text-indigo-700"
            >
              HIGH-LOW
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={message}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-gray-700"
              >
                {message}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!isGameOver ? (
                <motion.div
                  key="game"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <Input
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Enter your guess"
                    className="text-center"
                  />
                  <Button
                    onClick={handleGuess}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Submit Guess
                  </Button>

                  {history.length > 0 && (
                    <div className="mt-4">
                      <h2 className="text-sm font-semibold text-gray-600">Your guesses:</h2>
                      <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {history.map((num, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {num}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-lg font-medium text-green-600">
                    You guessed the number <span className="font-bold">{target}</span> in{" "}
                    <span className="font-bold">{attempts}</span> tries!
                  </p>
                  <Button
                    onClick={restartGame}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Restart Game
                  </Button>

                  {history.length > 0 && (
                    <div className="mt-4">
                      <h2 className="text-sm font-semibold text-gray-600">Your guesses:</h2>
                      <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {history.map((num, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {num}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
  );
}
