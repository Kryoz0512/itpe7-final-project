"use client";

import React from "react";

export default function GameCard({ children }) {
  return (
    <div className="bg-card flex flex-col gap-5 rounded-2xl bg-white p-8 text-center min-h-[300px] min-w-[345px] justify-center shadow">
      {children}
    </div>
  );
}
