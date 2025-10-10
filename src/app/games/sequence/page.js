"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}   // starting state
      animate={{ opacity: 1, y: 0 }}    // animated to this state
      transition={{ duration: 0.5 }}    // animation speed
      className="p-4 bg-blue-500 text-white rounded-lg"
    >
    </motion.div>
  )
}
