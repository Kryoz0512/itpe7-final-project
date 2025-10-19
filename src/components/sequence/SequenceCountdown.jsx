"use client"

export default function SequenceCountdown({ value }) {
    return (
        <div className="flex justify-center items-center py-16">
            <div className="text-8xl font-bold text-blue-500 animate-pulse">{value}</div>
        </div>
    )
}
