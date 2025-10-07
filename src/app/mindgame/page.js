"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LoadingScreen from "@/components/layout/LoadingScreen"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function MindGamePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-2xl w-full text-center space-y-8">
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl animate-bounce-in">🧠</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Mind Game Started!
              </h2>
              <p className="text-lg text-muted-foreground">
                Prepare to challenge your mental agility
              </p>
            </div>

            <Button asChild size="lg" variant="outline" className="min-w-[200px] bg-transparent">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
