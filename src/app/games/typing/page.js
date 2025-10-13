"use client"

import { useState, useEffect, useRef } from "react"

const WORDS = [
    "keyboard", "react", "nextjs", "challenge", "developer", "javascript",
    "function", "component", "state", "render", "performance", "async",
    "frontend", "design", "framework", "dynamic", "server", "client", "router",
    "testing", "compile", "deploy", "debug", "terminal", "syntax"
]

export default function TypingGame() {
    const [words, setWords] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [input, setInput] = useState("")
    const [correct, setCorrect] = useState(0)
    const [timeLeft, setTimeLeft] = useState(30)
    const [isActive, setIsActive] = useState(false)
    const [finished, setFinished] = useState(false)
    const [isCorrectTyping, setIsCorrectTyping] = useState(null)
    const inputRef = useRef(null)

    // Generate words when component mounts
    useEffect(() => {
        generateWords()
    }, [])

    // Focus input automatically on mount
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    // Countdown timer
    useEffect(() => {
        let timer
        if (isActive && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
        } else if (timeLeft === 0) {
            setIsActive(false)
            setFinished(true)
        }
        return () => clearTimeout(timer)
    }, [isActive, timeLeft])

    // Generate a new random list of words
    const generateWords = () => {
        const newWords = Array.from({ length: 60 }, () => WORDS[Math.floor(Math.random() * WORDS.length)])
        setWords(newWords)
        setCurrentIndex(0)
        setCorrect(0)
        setInput("")
        setTimeLeft(30)
        setFinished(false)
        setIsActive(false)
        setIsCorrectTyping(null)
    }

    // Handle typing input
    const handleChange = (e) => {
        const value = e.target.value
        setInput(value)

        // Start timer on first keystroke
        if (!isActive && !finished) setIsActive(true)

        const currentWord = words[currentIndex] || ""
        if (currentWord.startsWith(value.trim())) {
            setIsCorrectTyping(true)
        } else {
            setIsCorrectTyping(false)
        }

        // Space pressed → check word
        if (value.endsWith(" ")) {
            checkWord(value.trim())
            setInput("")
            setIsCorrectTyping(null)
        }
    }

    const checkWord = (typedWord) => {
        if (typedWord === words[currentIndex]) setCorrect(correct + 1)
        setCurrentIndex(currentIndex + 1)
    }

    const accuracy = currentIndex > 0 ? Math.round((correct / currentIndex) * 100) : 0
    const wpm = Math.round(correct / ((30 - timeLeft) / 60)) || 0

    const handleRestart = () => {
        generateWords()
        setTimeout(() => inputRef.current?.focus(), 100) // 👈 ensures autofocus works after re-render
    }

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gray-950 text-white p-8 mb-5">
            <h1 className="text-4xl font-bold mb-8 text-yellow-400">⚡ Typing Speed Test</h1>

            <div className="max-w-2xl text-xl leading-relaxed mb-6 text-gray-400 text-center h-24 whitespace-pre-wrap break-words">
                {words.map((word, i) => {
                    let colorClass = ""
                    if (i === currentIndex && isCorrectTyping === true) colorClass = "text-green-400 underline"
                    else if (i === currentIndex && isCorrectTyping === false) colorClass = "text-red-400 underline"
                    else if (i === currentIndex) colorClass = "text-yellow-400 underline"
                    else if (i < currentIndex) colorClass = "text-gray-600"

                    return (
                        <span key={i} className={`mr-2 inline-block ${colorClass}`}>
                            {word}
                        </span>
                    )
                })}
            </div>

            {!finished && (<input
                ref={inputRef}
                type="text"
                className={`p-3 w-80 text-white rounded-lg outline-none text-lg text-center transition-all duration-200 ${isCorrectTyping === true ? "ring-2 ring-green-400" : ""
                    } ${isCorrectTyping === false ? "ring-2 ring-red-400" : ""}`}
                value={input}
                onChange={handleChange}
                disabled={finished}
                placeholder="Start typing..."
            />)}

            <div className="flex gap-8 mt-8 text-lg">
                <p>⏳ Time: <span className="font-bold text-yellow-400">{timeLeft}s</span></p>
                <p>✅ WPM: <span className="font-bold text-green-400">{wpm}</span></p>
                <p>🎯 Accuracy: <span className="font-bold text-blue-400">{accuracy}%</span></p>
            </div>

            {finished && (
                <div className="mt-10 text-center">
                    <p className="text-2xl mb-4 font-semibold">🏁 Time’s up!</p>
                    <button
                        onClick={handleRestart}
                        className="px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
                    >
                        Restart
                    </button>
                </div>
            )}
        </div>
    )
}
