"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GuessHistory({ history }) {
  return (
    <div className="mt-4">
      <h2 className="text-sm font-semibold text-black">Your guesses:</h2>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {history.map((num, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-gray-300 text-black px-3 py-1 rounded-full text-sm font-medium"
          >
            {num}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
