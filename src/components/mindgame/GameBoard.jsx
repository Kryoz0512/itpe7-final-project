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
    <div className="flex flex-col gap-5 rounded-xl border p-20 text-center bg-gradient-to-br bg-transparent min-h-[230px] min-w-[345px] justify-center">
      <h1 className="text-4xl font-semibold text-white">Level {level}</h1>

      {showNumber ? (
        <>
          <h2 className="text-7xl font-bold font-mono text-white">{numberToRemember}</h2>
          <TimerBar timer={timer} />
        </>
      ) : (
        <>
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="text-white p-5 rounded-full"
            placeholder="Enter the number"
          />
          <div className="flex justify-center gap-3">
            <Button className="cursor-pointer bg-white text-black hover:bg-black hover:text-white" onClick={onCheck}>Submit</Button>
            <Button className="cursor-pointer bg-white text-black hover:bg-black hover:text-white" variant="secondary" onClick={onReset}>
              Reset
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
