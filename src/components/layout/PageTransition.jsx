"use client"

import React from 'react'
import * as motion from "motion/react-client"

export default function PageTransition({ children }) {
    return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            >
                {children}
            </motion.div>
    )
}
