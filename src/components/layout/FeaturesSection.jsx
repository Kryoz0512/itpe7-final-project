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
    <section className="px-4 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <feature.icon className="w-12 h-12 text-black" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
