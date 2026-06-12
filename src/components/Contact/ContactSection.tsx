import { titleClass } from "../common/constants"
import { RevealOnScroll } from "../common/RevealOnScroll"
import { ContactForm } from "./ContactForm"
import { ContactText } from "./ContactText"

export const ContactSection = () => {
  return (
    <section aria-label="Seção de contato" id="contact" className="container mx-auto min-h-[80dvh] lg:px-8 3xl:px-0">
      <RevealOnScroll className="text-center lg:text-left">
        <p className={titleClass}>CONTATO</p>
      </RevealOnScroll>
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        <ContactText />
        <ContactForm />
      </div>
    </section>
  )
}