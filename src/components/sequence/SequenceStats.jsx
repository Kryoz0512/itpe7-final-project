"use client"

import React from "react"

export default function SequenceStats({ level, rounds }) {
  return (
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
  )
}
