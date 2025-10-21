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
    <div className="flex flex-col gap-5 rounded-2xl border bg-white p-20 text-center min-h-[230px] min-w-[345px] justify-center shadow">
      <h1 className="text-2xl font-semibold text-black">Level {level}</h1>

      {showNumber ? (
        <>
          <h2 className="text-3xl font-bold font-mono text-black">{numberToRemember}</h2>
          <TimerBar timer={timer} />
        </>
      ) : (
        <>
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="text-black p-5 border border-black roundedlgfull"
            placeholder="Enter the number"
          />
          <div className="flex justify-center gap-3">
            <Button className="cursor-pointer border border-black bg-black text-white hover:bg-white hover:text-black" onClick={onCheck}>Submit</Button>
            <Button className="cursor-pointer border border-black bg-black text-white hover:bg-white hover:text-black" variant="secondary" onClick={onReset}>
              Reset
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
