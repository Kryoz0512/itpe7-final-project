import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Target } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Enhance Memory",
      description: "Improve your memory retention and recall with scientifically designed challenges",
    },
    {
      icon: Zap,
      title: "Boost Focus",
      description: "Sharpen your concentration and attention span through engaging exercises",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Develop critical thinking skills with puzzles that challenge your logic",
    },
  ]

  return (
    <section
      className="relative px-4 py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/homebg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-300 transition-all"
            >
              <CardContent className="pt-6 text-center space-y-3 text-white">
                <div className="w-15 h-15 flex items-center justify-center mx-auto">
                  <feature.icon className="rounded-4xl w-12 h-12 text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-200">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

  )
}
