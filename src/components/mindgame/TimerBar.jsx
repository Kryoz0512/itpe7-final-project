import React from "react";

export default function TimerBar({ timer }) {
  const widthClass =
    timer === 5
      ? "w-full"
      : timer === 4
      ? "w-4/5"
      : timer === 3
      ? "w-3/5"
      : timer === 2
      ? "w-2/5"
      : "w-1/5";

  return (
    <p className={`bg-white h-2 rounded-xl duration-1000 ease-linear ${widthClass}`}></p>
  );
}
