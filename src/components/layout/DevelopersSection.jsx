import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function DevelopersSection() {
  const developers = [
    { name: "Simone Roy Abello", role: "Lead Developer", initials: "AC" },
    { name: "Mark Robert Bayudang", role: "UI/UX Designer", initials: "DC" },
    { name: "Justine Cedric Ocampo", role: "Game Developer", initials: "JC" },
    { name: "Nina Nambio", role: "Backend Engineer", initials: "ED" },
    { name: "Jose Louis Ortega", role: "Frontend Developer", initials: "JOLO" },
    { name: "AJ Ignacio", role: "QA Engineer", initials: "AI" },
  ]

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-xl font-medium">
            <Users className="w-10 h-10" />
            Meet the Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">Our Developers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The talented team behind BrainBoost Games, dedicated to creating engaging brain training experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev, index) => (
            <Card key={index} className="border-border/50 hover:border-secondary/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto text-2xl font-semibold text-secondary">
                  {dev.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{dev.name}</h3>
                  <p className="text-sm text-muted-foreground">{dev.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}