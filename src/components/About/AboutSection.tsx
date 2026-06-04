import { Separator } from "../ui/separator"
import { AboutMainText } from "./AboutMainText"
import { AboutTechnologies } from "./AboutTechnologies"
import { AboutTimeLine } from "./AboutTimeLine"

export const AboutSection = () => {
  return (
    <section aria-label="Seção sobre mim" id="about" className="container mx-auto min-h-dvh flex flex-col py-18 mt-10">
      <div className="flex gap-x-20 mb-20">
        <AboutMainText />
        <AboutTimeLine />
      </div>
      <Separator />
      <AboutTechnologies />
    </section>
  )
}