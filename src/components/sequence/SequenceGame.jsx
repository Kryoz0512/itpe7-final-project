"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import * as motion from "motion/react-client"

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
        <Card className="w-200 h-full max-w-2xl p-8 space-y-6 bg-violet-800/80">
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold text-pink-500">Sequence Memory</h1>
                <p className="text-pink-300">Watch and repeat the pattern!</p>
            </div>

            {countdown !== null && (
                <div className="flex justify-center items-center py-16">
                    <div className="text-8xl font-bold text-blue-500 animate-pulse">{countdown}</div>
                </div>
            )}

            {/* Show stats when playing */}
            {isPlaying && !isGameOver && countdown === null && (
                <div className="flex justify-center gap-8 text-center">
                    <div>
                        <p className="text-4xl text-pink-300">Level</p>
                        <p className="text-3xl font-bold text-pink-300">{level}</p>
                    </div>
                    <div>
                        <p className="text-4xl text-pink-300">Rounds</p>
                        <p className="text-3xl font-bold text-pink-300">{rounds}</p>
                    </div>
                </div>
            )}

            {/* Game grid */}
            {isPlaying && !isGameOver && countdown === null && (
                <div className="flex justify-center">
                    <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${gridSize}, 100px)` }}>
                        {Array.from({ length: totalBoxes }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleClick(i)}
                                className={`
                  w-[100px] h-[100px] rounded-lg transition-all
                  ${activeBox === i ? "bg-blue-500 scale-95" : "bg-gray-300 hover:bg-gray-400"}
                `}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Status text */}
            {isPlaying && !isGameOver && countdown === null && (
                <p className="text-center font-medium text-pink-300 text-xl">
                    {isShowingPattern ? "Watch the pattern..." : "Your turn!"}
                </p>
            )}

            {/* Start screen */}
            {!isPlaying && !isGameOver && (
                <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-center py-8">
                    <Button onClick={startGame} size="lg">
                        Start Game
                    </Button>
                </motion.div>
            )}

            {/* Game over screen */}
            {isGameOver && (
                <div className="text-center space-y-4 py-8">
                    <h2 className="text-6xl font-bold text-red-500">Game Over!</h2>
                    <p className="text-lg text-pink-500">
                        You completed <span className="font-bold">{rounds}</span> rounds
                    </p>
                    <p className="text-white text-xl">Reached level {level}</p>
                    <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                    >

                        <Button onClick={startGame} size="lg">
                            Play Again
                        </Button>
                    </motion.div>
                </div>
            )}
        </Card>
    )
}
