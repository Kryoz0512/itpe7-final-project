import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TimerBar from "./TimerBar";

export default function GameBoard({
  level,
  numberToRemember,
  showNumber,
  timer,
  userInput,
  setUserInput,
  onCheck,
  onReset,
}) {
  return (
    <div className="bg-card flex flex-col gap-5 rounded-xl border p-8 text-center bg-gradient-to-br from-purple-800 to-pink-800 min-h-[230px] min-w-[345px] justify-center">
      <h1 className="text-2xl font-semibold text-white">Level {level}</h1>

      {showNumber ? (
        <>
          <h2 className="text-xl font-mono text-white">{numberToRemember}</h2>
          <TimerBar timer={timer} />
        </>
      ) : (
        <>
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter the number"
          />
          <div className="flex justify-center gap-3">
            <Button onClick={onCheck}>Submit</Button>
            <Button variant="secondary" onClick={onReset}>
              Reset
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
