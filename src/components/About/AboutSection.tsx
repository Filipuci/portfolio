import { AboutMainText } from "./AboutMainText"
import { AboutTechnologies } from "./AboutTechnologies"
import { AboutTimeLine } from "./AboutTimeLine"

export const AboutSection = () => {
  return (
    <section aria-label="Seção sobre mim" id="about" className="container mx-auto mb-40 flex flex-col mt-26 lg:px-8 scroll-mt-40">
      <div className="flex flex-col items-center gap-x-60 mb-20 lg:flex-row lg:items-start lg:justify-start ">
        <AboutMainText />
        <AboutTimeLine />
      </div>
      <AboutTechnologies />
    </section>
  )
}