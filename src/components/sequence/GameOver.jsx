"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import * as motion from "motion/react-client"

export default function GameOver({ rounds, level, onPlayAgain }) {
  return (
    <div className="text-center space-y-4 py-8">
      <h2 className="text-6xl font-bold text-red-700">Game Over!</h2>
      <p className="text-lg text-pink-700">
        You completed <span className="font-bold">{rounds}</span> rounds
      </p>
      <p className="text-white text-xl">Reached level {level}</p>
      <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
        <Button className="border-2 bg-transparent hover:bg-pink-950 cursor-pointer" onClick={onPlayAgain} size="lg">
          Play Again
        </Button>
      </motion.div>
    </div>
  )
}
