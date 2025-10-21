"use client"

import React from "react"

export default function SequenceStats({ level, rounds }) {
  return (
    <div className="flex justify-center gap-8 text-center">
      <div>
        <p className="text-4xl text-black">Level</p>
        <p className="text-3xl font-bold black">{level}</p>
      </div>
      <div>
        <p className="text-4xl text-black">Rounds</p>
        <p className="text-3xl font-bold black">{rounds}</p>
      </div>
    </div>
  )
}
