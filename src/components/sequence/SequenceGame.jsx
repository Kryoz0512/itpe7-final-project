"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import SequenceGrid from "./SequenceGrid"
import SequenceStart from "./SequenceStart"
import SequenceStats from "./SequenceStats"
import SequenceCountdown from "./SequenceCountdown"
import SequenceGameOver from "./SequenceGameOver"

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

            {countdown !== null && <SequenceCountdown value={countdown} />}

            {isPlaying && !isGameOver && countdown === null && (
                <>
                    <SequenceStats level={level} rounds={rounds} />

                    <SequenceGrid totalBoxes={totalBoxes} gridSize={gridSize} activeBox={activeBox} onBoxClick={handleClick} />

                    <p className="text-center font-medium text-pink-300 text-xl">
                        {isShowingPattern ? "Watch the pattern..." : "Your turn!"}
                    </p>
                </>
            )}

            {!isPlaying && !isGameOver && <SequenceStart onStart={startGame} />}

            {isGameOver && <SequenceGameOver rounds={rounds} level={level} onPlayAgain={startGame} />}
        </Card>
    )
}
