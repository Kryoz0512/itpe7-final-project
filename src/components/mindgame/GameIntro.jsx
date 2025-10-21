import React from "react";
import { Button } from "@/components/ui/button";

export default function GameIntro({ onStart, onReset, gameOver }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border p-10 text-center bg-white shadow">
      <h1 className="text-3xl font-bold font-mono text-black">Number Memory Mindgame</h1>
      <p className="mb-8 text-black text-lg font-mono">Memorize the number and type it back!</p>

      {gameOver && (
        <h2 className="text-lg text-red-500 font-mono">Game Over! You reached your limit.</h2>
      )}

      <div className="flex justify-center gap-3">
        <Button className="cursor-pointer border border-black bg-black text-white hover:bg-white hover:text-black" onClick={onStart}>Start Game</Button>
        {gameOver && <Button onClick={onReset}>Reset</Button>}
      </div>
    </div>
  );
}
