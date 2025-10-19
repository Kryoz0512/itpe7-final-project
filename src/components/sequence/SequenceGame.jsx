"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import * as motion from "motion/react-client"
import SequenceGrid from "./SequenceGrid"
import Countdown from "./Countdown"
import SequenceStats from "./SequenceStats"
import StartScreen from "./StartScreen"
import GameOver from "./GameOver"

export default function SequenceMemoryGame() {

    const [isPlaying, setIsPlaying] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [isShowingPattern, setIsShowingPattern] = useState(false)
    const [countdown, setCountdown] = useState(null)


    const [level, setLevel] = useState(1)
    const [rounds, setRounds] = useState(0)
    const [pattern, setPattern] = useState([])
    const [playerClicks, setPlayerClicks] = useState([])
    const [activeBox, setActiveBox] = useState(null)

    const gridSize = 3
    const totalBoxes = 9

    async function startGame() {
        setIsPlaying(true)
        setIsGameOver(false)
        setLevel(1)
        setRounds(0)
        setPattern([])


        for (let i = 3; i > 0; i--) {
            setCountdown(i)
            await wait(1000)
        }
        setCountdown(null)


        playRound([])
    }

    function playRound(currentPattern) {

        const newBox = Math.floor(Math.random() * totalBoxes)
        const newPattern = [...currentPattern, newBox]

        setPattern(newPattern)
        setPlayerClicks([])
        showPattern(newPattern)
    }


    function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }


    async function showPattern(pattern) {
        setIsShowingPattern(true)

        for (const boxIndex of pattern) {
            await wait(300)
            setActiveBox(boxIndex)
            await wait(500)
            setActiveBox(null)
        }

        setIsShowingPattern(false)
    }


    function handleClick(boxIndex) {
        if (isShowingPattern || isGameOver) return


        setActiveBox(boxIndex)
        setTimeout(() => setActiveBox(null), 200)


        const newClicks = [...playerClicks, boxIndex]
        setPlayerClicks(newClicks)


        const currentIndex = newClicks.length - 1
        if (newClicks[currentIndex] !== pattern[currentIndex]) {

            setIsGameOver(true)
            return
        }


        if (newClicks.length === pattern.length) {

            setLevel(level + 1)
            setRounds(rounds + 1)
            setTimeout(() => playRound(pattern), 800)
        }
    }

    return (
        <Card className="w-200 h-full max-w-2xl p-8 space-y-6 border-0 bg-transparent">
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold text-pink-700">Sequence Memory</h1>
                <p className="text-pink-600">Watch and repeat the pattern!</p>
            </div>

            <Countdown value={countdown} />

            {/* Show stats when playing */}
            {isPlaying && !isGameOver && countdown === null && <SequenceStats level={level} rounds={rounds} />}

            {/* Game grid */}
            {isPlaying && !isGameOver && countdown === null && (
                <SequenceGrid gridSize={gridSize} totalBoxes={totalBoxes} activeBox={activeBox} disabled={isShowingPattern} onCellClick={handleClick} />
            )}

            {/* Status text */}
            {isPlaying && !isGameOver && countdown === null && (
                <p className="text-center font-medium text-pink-300 text-4xl">
                    {isShowingPattern ? "Watch the pattern..." : "Your turn!"}
                </p>
            )}

            {/* Start screen */}
            {!isPlaying && !isGameOver && <StartScreen onStart={startGame} />}

            {/* Game over screen */}
            {isGameOver && <GameOver rounds={rounds} level={level} onPlayAgain={startGame} />}
        </Card>
    )
}
