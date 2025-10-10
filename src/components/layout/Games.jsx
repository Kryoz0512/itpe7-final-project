import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import * as motion from "motion/react-client"
import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'


const Games = [
    {
        img: "file.svg",
        link: "/games/mindgame"
    },
    {
        img: "/images/quizlogo.png",
        link: "/games/quiz"
    },
    {
        img: "/images/sequence.png",
        link: "/games/sequence"
    },
    {
        img: "file.svg",
        link: "/"
    },
]

export default function page() {


    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360, transition:{duration:1} }}
                className='grid grid-cols-2 gap-10'>
                {Games.map((game, index) => (
                    <Link key={index + 1} href={game.link}>
                        <Card className={"flex justify-center w-80 h-80 bg-linear-65 from-purple-800 to-pink-800 overflow-hidden hover:shadow-pink-600 hover:shadow-2xl duration-500"}>
                            <CardContent className={"self-center"}>
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    src={game.img} className='h-full w-full'></motion.img>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </motion.div>
        </>
    )
}
