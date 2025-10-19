"use client"

export default function SequenceBox({ index, active = false, onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label={`sequence-box-${index}`}
            className={`w-[100px] h-[100px] rounded-lg transition-all ${active ? "bg-blue-500 scale-95" : "bg-gray-300 hover:bg-gray-400"}`}
        />
    )
}
