"use client"

import React from "react"

export default function Countdown({ value }) {
  if (value === null) return null
  return (
    <div className="flex justify-center items-center py-16">
      <div className="text-8xl font-bold text-black animate-pulse">{value}</div>
    </div>
  )
}
