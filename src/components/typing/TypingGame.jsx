"use client";

import { useState, useEffect, useRef } from "react";
import InputBox from "./InputBox";
import StatsPanel from "./StatsPanel";
import ResultScreen from "./ResultScreen";
import WordList, { WORDS } from "./WordList";

export default function TypingGame() {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputBox, setInputBox] = useState("");
  const [correct, setCorrect] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isCorrectTyping, setIsCorrectTyping] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    generateWords();
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setFinished(true);
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft]);

  const generateWords = () => {
    const newWords = Array.from(
      { length: 60 },
      () => WORDS[Math.floor(Math.random() * WORDS.length)]
    );
    setWords(newWords);
    setCurrentIndex(0);
    setCorrect(0);
    setInputBox("");
    setTimeLeft(30);
    setFinished(false);
    setIsActive(false);
    setIsCorrectTyping(null);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputBox(value);

    if (!isActive && !finished) setIsActive(true);

    const currentWord = words[currentIndex] || "";
    setIsCorrectTyping(currentWord.startsWith(value.trim()));

    if (value.endsWith(" ")) {
      checkWord(value.trim());
      setInputBox("");
      setIsCorrectTyping(null);
    }
  };

  const checkWord = (typedWord) => {
    if (typedWord === words[currentIndex]) setCorrect(correct + 1);
    setCurrentIndex(currentIndex + 1);
  };

  const accuracy =
    currentIndex > 0 ? Math.round((correct / currentIndex) * 100) : 0;
  const wpm = Math.round(correct / ((30 - timeLeft) / 60)) || 0;

  const handleRestart = () => {
    generateWords();
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-950 rounded-3xl border-2 border-white text-white p-8 mb-5">
      <h1 className="text-6xl font-bold mb-8 text-yellow-400">
        Typing Speed Test
      </h1>

      <WordList
        words={words}
        currentIndex={currentIndex}
        isCorrectTyping={isCorrectTyping}
      />
      <InputBox
        inputRef={inputRef}
        input={inputBox}
        handleChange={handleChange}
        isCorrectTyping={isCorrectTyping}
        finished={finished}
      />
      <StatsPanel timeLeft={timeLeft} wpm={wpm} accuracy={accuracy} />
      <ResultScreen finished={finished} handleRestart={handleRestart} />
    </div>
  );
}
