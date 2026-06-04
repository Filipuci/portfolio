import { AboutMainText } from "./AboutMainText"
import { AboutTimeLine } from "./AboutTimeLine"

export const AboutSection = () => {
  return (
    <section aria-label="Seção sobre mim" id="about" className="container mx-auto min-h-dvh flex gap-x-20 py-18 mt-10">
        <AboutMainText />
        <AboutTimeLine />
    </section>
  )
}