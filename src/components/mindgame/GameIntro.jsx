import React from "react";
import { Button } from "@/components/ui/button";

export default function GameIntro({ onStart, onReset, gameOver }) {
  return (
    <div className="flex flex-col gap-5 rounded-xl border p-10 text-center bg-gradient-to-br bg-transparent">
      <h1 className="text-4xl font-bold text-white">Number Memory Mindgame</h1>
      <p className="mb-8 text-white text-2xl font-serif">Memorize the number and type it back!</p>

      {gameOver && (
        <h2 className="text-lg text-white">Game Over! You reached your limit.</h2>
      )}

      <div className="flex justify-center gap-3">
        <Button className="cursor-pointer bg-white text-black hover:bg-black hover:text-white" onClick={onStart}>Start Game</Button>
        {gameOver && <Button onClick={onReset}>Reset</Button>}
      </div>
    </div>
  );
}
