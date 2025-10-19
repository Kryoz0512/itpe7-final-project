"use client"

import React from "react"

export default function Cell({ index, active, disabled, onClick }) {
  return (
    <button
      aria-label={`cell-${index}`}
      onClick={() => !disabled && onClick(index)}
      className={`w-[100px] h-[100px] rounded-lg transition-all ${
        active ? "bg-blue-500 scale-95" : "bg-gray-300 hover:bg-gray-400"
      }`}
    />
  )
}
