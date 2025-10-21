"use client";

import Game from "@/components/binary/Game";
import GameMode from "@/components/binary/GameMode";
import Header from "@/components/binary/Header";
import Message from "@/components/binary/Message";
import Practice from "@/components/binary/Practice";
import { useEffect, useRef, useState } from "react";

export default function BinaryGame() {
  const [mode, setMode] = useState(null); // 'practice8', 'practice4', 'timed8_10', 'timed4_15', 'timed4_10', 'timed8_15'
  const [target, setTarget] = useState(0);
  const [bitLength, setBitLength] = useState(8);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (mode) {
      generateTarget();
      if (!mode.startsWith("practice")) startTimer();
    }
    return () => clearInterval(timerRef.current);
  }, [mode]);

  const generateTarget = () => {
    const range = bitLength === 8 ? 256 : 16;
    setTarget(Math.floor(Math.random() * range));
    setGuess("");
    setMessage("");
    inputRef.current?.focus();
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    const limit = getTimeLimit();
    setTimeLeft(limit);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setMessage(`⏰ Time's up! The answer was ${toBinary(target)}.`);
          setStreak(0);
          setTimeout(() => {
            generateTarget();
            startTimer();
          }, 5000);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const getTimeLimit = () => {
    if (mode === "timed8_10") return 10;
    if (mode === "timed4_15") return 15;
    if (mode === "timed4_10") return 10;
    if (mode === "timed8_15") return 15;
    return 10;
  };

  const toBinary = (n) => n.toString(2).padStart(bitLength, "0");

  const handleChange = (e) => {
    const raw = e.target.value.replace(/[^01]/g, "").slice(0, bitLength);
    setGuess(raw);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    if (!new RegExp(`^([01]{${bitLength}})$`).test(guess)) {
      setMessage(`Enter exactly ${bitLength} bits (0/1).`);
      return;
    }
    const value = parseInt(guess, 2);
    const isCorrect = value === target;
    setTotal((t) => t + 1);
    if (isCorrect) {
      setCorrect((c) => c + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      setBestStreak((b) => Math.max(b, newStreak));
      setMessage(`✅ Correct! ${guess} = ${target}`);
      clearInterval(timerRef.current);
      setTimeout(() => {
        generateTarget();
        if (!mode.startsWith("practice")) startTimer();
      }, 5000);
    } else {
      setStreak(0);
      setMessage(`❌ Incorrect. You entered ${guess} (=${value}).`);
    }
  };

  const resetStats = () => {
    setCorrect(0);
    setTotal(0);
    setStreak(0);
    setBestStreak(0);
    setMessage("");
    setGuess("");
  };

  const goBack = () => {
    clearInterval(timerRef.current);
    setMode(null);
    setMessage("");
    setGuess("");
  };

  if (!mode) {
    return (
        <GameMode 
        bitLength={setBitLength}
        mode={setMode}/>
    );
  }

  return (
      <div className="w-full max-w-xl rounded-2xl shadow-lg border-2 bg-white p-6">
        <Header 
        goBack={goBack}
        mode={mode}
        timeLeft={timeLeft}/>

        <Game 
        target={target}
        bitLength={bitLength}
        inputRef={inputRef}
        guess={guess}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}/>

        <Message message={message}/>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={checkAnswer}
            className="px-4 py-2 rounded-xl cursor-pointer bg-black text-white hover:opacity-90 active:opacity-80"
          >
            Check
          </button>
          {mode.startsWith("practice") && (
           <Practice 
           generateTarget={generateTarget}
           setMessage={setMessage}
           toBinary={toBinary}
           target={target}/>
          )}
        </div>
      </div>
  );
}
