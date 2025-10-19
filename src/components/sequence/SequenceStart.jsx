"use client"

import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"

export default function SequenceStart({ onStart }) {
    return (
        <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="text-center py-8">
            <Button onClick={onStart} size="lg">
                Start Game
            </Button>
        </motion.div>
    )
}
