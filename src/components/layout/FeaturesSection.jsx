import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Target } from "lucide-react"
import * as motion from "motion/react-client"

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

export default function FeaturesSection() {



  return (
    <section
      className="relative px-4 py-16 bg-[url(/images/homebg.jpg)] bg-cover bg-center bg-no-repeat "
    >

      <div
        className="relative max-w-6xl mx-auto ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-300 transition-all"
              >
                <CardContent className="pt-6 text-center space-y-3 text-white shadow-amber-50">
                  <div className="w-15 h-15 flex items-center justify-center mx-auto">
                    <feature.icon className="rounded-4xl w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  )
}
