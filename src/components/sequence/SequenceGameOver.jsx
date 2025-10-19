"use client"

import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"

export default function SequenceGameOver({ rounds, level, onPlayAgain }) {
    return (
        <div className="text-center space-y-4 py-8">
            <h2 className="text-6xl font-bold text-red-500">Game Over!</h2>
            <p className="text-lg text-pink-500">You completed <span className="font-bold">{rounds}</span> rounds</p>
            <p className="text-white text-xl">Reached level {level}</p>
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
                <Button onClick={onPlayAgain} size="lg">Play Again</Button>
            </motion.div>
        </div>
    )
}
