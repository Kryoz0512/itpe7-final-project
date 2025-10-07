"use client"

import { useEffect, useState } from "react"
import { Spinner } from "@/components/ui/spinner"

export default function LoadingScreen({ onComplete, duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, duration)

    return () => clearTimeout(timer)
  }, [onComplete, duration])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <Spinner className="h-12 w-12 text-primary" />
        <p className="text-xl md:text-2xl font-medium text-foreground animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  )
}
