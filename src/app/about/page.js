import DevelopersSection from "@/components/layout/DevelopersSection";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function About() {
  return (
    <section
      className="relative px-4 py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/homeBG.png')",
      }}
    >
      <div className="absolute inset-0" />
      <DevelopersSection/>

    </section>
  );
}
