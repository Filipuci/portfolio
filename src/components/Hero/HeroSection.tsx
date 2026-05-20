import { HeroHeader } from "./HeroHeader"
import { HeroContent } from "./HeroContent"
import { Separator } from "../ui/separator"

export const HeroSection = () => {
  return (
    <section className="bg-hero" aria-label="Seção principal">
      <div className="relative h-dvh overflow-hidden">
        <div className="container mx-auto h-full flex flex-col">
          <HeroHeader />
          <Separator />
          <HeroContent />
        </div>
      </div>
    </section>
  )
}