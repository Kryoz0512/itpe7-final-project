"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GuessInput({ guess, onGuessChange, onSubmit, onRestart }) {
  return (
    <div className="space-y-4">
      <Input
        min={1}
        max={100}
        type="number"
        value={guess}
        onChange={(e) => onGuessChange(e.target.value)}
        placeholder="Enter your guess"
        className="text-center bg-white/90 text-black placeholder:text-gray-500"
      />
      <div className="flex justify-center gap-3">
        <Button onClick={onSubmit} className="cursor-pointer bg-black text-white hover:bg-white hover:text-black border">
          Submit Guess
        </Button>
        <Button className="cursor-pointer" variant="secondary" onClick={onRestart}>
          Reset
        </Button>
      </div>
    </div>
  );
}
