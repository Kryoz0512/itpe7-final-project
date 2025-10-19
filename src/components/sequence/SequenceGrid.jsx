"use client"

import SequenceBox from "./SequenceBox"

export default function SequenceGrid({ totalBoxes = 9, gridSize = 3, activeBox, onBoxClick }) {
    return (
        <div className="flex justify-center">
            <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${gridSize}, 100px)` }}>
                {Array.from({ length: totalBoxes }).map((_, i) => (
                    <SequenceBox key={i} index={i} active={activeBox === i} onClick={() => onBoxClick(i)} />
                ))}
            </div>
        </div>
    )
}
