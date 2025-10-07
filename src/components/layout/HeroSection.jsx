import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-purple-50 px-4 py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-xl font-medium mb-4">
            <Brain className="w-10 h-10 text-purple-900" />
          <h1 className="text-purple-800">Train Your Brain Daily</h1>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-700 tracking-tight text-balance">
            Challenge Your Mind
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty leading-relaxed text-purple-950">
            Boost your cognitive skills with our collection of engaging brain games designed to enhance memory, focus,
            and problem-solving abilities
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="bg-purple-900 w-full sm:w-auto min-w-[200px] text-base hover:bg-purple-950">
            <Link href="/quiz">Play Quiz Game</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-pink-900 w-full sm:w-auto min-w-[200px] text-white hover:bg-pink-950 ">
            <Link href="/mindgame">Play Mind Game</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
