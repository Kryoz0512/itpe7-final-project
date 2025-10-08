import { useEffect, useState } from "react"
import { FaBrain } from "react-icons/fa6";

export default function LoadingScreen({ onComplete, duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, duration)
    return () => clearTimeout(timer)
  }, [onComplete, duration])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 via-pink-300 to-yellow-300 animate-fadeIn">
      <div className="relative">
        <div className="w-20 h-20 border-8 border-white border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold animate-spin">
          <FaBrain />
        </div>
      </div>

      <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg animate-bounce">
        BrainBoost
      </h1>

      <p className="mt-3 text-white/90 text-lg font-medium animate-pulse">
        Loading...
      </p>
    </div>
  )
}
