import { HeroHeader } from "./HeroHeader"
import { HeroContent } from "./HeroContent"
import { Separator } from "../ui/separator"

export const HeroSection = () => {
  return (
    <section aria-label="Seção principal" className="pl-8 3xl:px-0 scroll-smooth">
      <div className="relative h-dvh overflow-hidden pt-20">
        <div className="container mx-auto min-h-[90dvh] flex flex-col">
          <HeroHeader />
          <Separator />
          <HeroContent />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      h-48
      bg-linear-to-b
      from-transparent
      via-[#030303]/80
      to-[#030303]
      z-20
      hidden
      xl:block
    "
      />
    </section>
  )
}