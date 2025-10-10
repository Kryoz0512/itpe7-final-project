import DevelopersSection from "@/components/layout/DevelopersSection";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function About() {
  return (
    <section className="relative px-4 pt-24 pb-0 min-h-screen flex items-center justify-center bg-[url('/images/homeBG.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0" />
      <DevelopersSection />
    </section>
  );
}
