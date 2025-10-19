"use client";

import GameMode from "@/components/binary/GameMode";
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
      <div className="w-full max-w-xl rounded-2xl shadow-lg bg-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Binary Game</h1>
          <button
            onClick={goBack}
            className="text-sm px-3 py-1 rounded-lg border hover:bg-gray-50"
          >
            ← Back
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Mode: <span className="font-medium">{mode}</span>
        </p>

        {!mode.startsWith("practice") && (
          <div className="mt-3 text-right text-sm text-gray-700">
            ⏱️ Time Left: <span className="font-semibold">{timeLeft}s</span>
          </div>
        )}

        <div className="mt-6">
          <p className="text-gray-500 text-sm">Decimal</p>
          <p className="text-4xl font-extrabold tabular-nums">{target}</p>
        </div>

        <label className="block mt-6 text-sm font-medium text-gray-700">
          Your {bitLength}-bit binary guess
        </label>
        <input
          ref={inputRef}
          value={guess}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={`e.g., ${bitLength === 8 ? "00011010" : "0010"}`}
          className="mt-2 w-full font-mono text-lg tracking-wider border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          inputMode="numeric"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />

        {message && (
          <div className="mt-4 text-sm">
            <div className="p-3 rounded-lg bg-gray-100">{message}</div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={checkAnswer}
            className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90 active:opacity-80"
          >
            Check
          </button>
          {mode.startsWith("practice") && (
            <>
              <button
                onClick={generateTarget}
                className="px-4 py-2 rounded-xl border hover:bg-gray-50"
              >
                New Number
              </button>
              <button
                onClick={() => setMessage(`ℹ️ Answer: ${toBinary(target)} is the binary for ${target}.`)}
                className="px-4 py-2 rounded-xl border hover:bg-gray-50"
              >
                Show Answer
              </button>
            </>
          )}
          {!mode.startsWith("practice") && (
            <button
              onClick={resetStats}
              className="ml-auto px-4 py-2 rounded-xl border hover:bg-gray-50"
            >
              Reset Stats
            </button>
          )}
        </div>

        {!mode.startsWith("practice") && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Stat label="Correct" value={correct} />
            <Stat label="Attempts" value={total} />
            <Stat label="Streak" value={streak} />
            <Stat label="Best Streak" value={bestStreak} />
          </div>
        )}
      </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-gray-50">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}
