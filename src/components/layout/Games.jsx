"use client"

import * as motion from "motion/react-client"
import React from "react"
import Link from "next/link"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

const Games = [
    {
        img: "/",
        link: "/games/mindgame",
        title: "Mind Game",
    },
    {
        img: "/images/quizlogo.png",
        link: "/games/quiz",
        title: "Quiz Challenge",
    },
    {
        img: "/images/sequence.png",
        link: "/games/sequence",
        title: "Sequence Puzzle",
    },
    {
        img: "/file.svg",
        link: "/",
        title: "Coming Soon",
    },
]

export default function GamesPage() {
    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
            {Games.map((game, index) => (
                <motion.div
                    key={index}
                    whileTap={{scale:1}}
                    whileHover={{scale:1.2}}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <Link href={game.link}>
                        <Card className="group relative w-72 h-80 bg-gradient-to-br from-purple-700/30 to-pink-700/30 border border-white/20 backdrop-blur-md overflow-hidden rounded-2xl shadow-md hover:shadow-pink-500/30 transition-all duration-500">
                            <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                                <motion.img
                                    src={game.img}
                                    alt={game.title}
                                    className="w-32 h-32 object-contain mb-6"
                                />
                                <h2 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors">
                                    {game.title}
                                </h2>
                            </CardContent>

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 transition-opacity duration-500"></div>
                        </Card>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}
