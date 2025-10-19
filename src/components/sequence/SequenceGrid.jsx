"use client"

import React from "react"
import Cell from "./Cell"

export default function SequenceGrid({ gridSize = 3, totalBoxes = 9, activeBox, disabled, onCellClick }) {
  return (
    <div className="flex justify-center">
      <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${gridSize}, 100px)` }}>
        {Array.from({ length: totalBoxes }).map((_, i) => (
          <Cell key={i} index={i} active={activeBox === i} disabled={disabled} onClick={onCellClick} />
        ))}
      </div>
    </div>
  )
}
