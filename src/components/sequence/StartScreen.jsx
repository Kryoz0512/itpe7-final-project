"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import * as motion from "motion/react-client"

export default function StartScreen({ onStart }) {
  return (
    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="text-center py-8">
      <Button className="border-2 bg-transparent hover:bg-pink-950 cursor-pointer" onClick={onStart} size="lg">
        Start Game
      </Button>
    </motion.div>
  )
}
