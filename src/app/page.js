
import HeroSection from "@/components/layout/HeroSection"
import FeaturesSection from "@/components/layout/FeaturesSection"
import DevelopersSection from "@/components/layout/DevelopersSection"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection/>
        <DevelopersSection  />
      </main>
      <Footer />
    </div>
  )
}
