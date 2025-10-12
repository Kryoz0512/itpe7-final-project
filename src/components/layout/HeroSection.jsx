"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Press_Start_2P } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import PageTransition from "./PageTransition";
import * as motion from "motion/react-client";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="relative px-4 pt-24 pb-0 min-h-screen flex items-center justify-center bg-[url('/images/homeBG.png')] bg-cover bg-center bg-no-repeat">
      <PageTransition>
        <div className="absolute inset-0" />

        <div className="relative max-w-6xl mx-auto text-center space-y-8 z-10">
          <div className="space-y-6">
            <h1
              className={`${pressStart2P.className} text-3xl md:text-7xl lg:text-7xl font-bold text-white tracking-widest`}
              style={{ textShadow: "4px 4px 0 #ec4899" }}
            >
              BRAIN BLITZ
            </h1>

            <p
              className={`${geistMono.className} mt-6 font-semibold text-sm md:text-base text-white uppercase tracking-[0.5em]`}
            >
              Your Daily Dose of Brain Power.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9,}}
            className="pt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-pink-900 hover:bg-pink-950 min-w-[200px] text-xs tracking-wider font-semibold"
              onClick={()=> console.log("Clicked")}
            >
              <Link href="/games">GET STARTED</Link>
            </Button>
          </motion.div>
        </div>
      </PageTransition>
    </section>
  );
}
