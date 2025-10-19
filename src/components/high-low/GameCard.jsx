"use client";

import React from "react";

export default function GameCard({ children }) {
  return (
    <div className="bg-card flex flex-col gap-5 rounded-xl border p-8 text-center bg-gradient-to-br from-purple-800 to-pink-800 min-h-[300px] min-w-[345px] justify-center shadow-lg">
      {children}
    </div>
  );
}
