import { titleClass } from "../common/constants"
import { RevealOnScroll } from "../common/RevealOnScroll"
import { ContactForm } from "./ContactForm"
import { ContactText } from "./ContactText"

export const ContactSection = () => {
  return (
    <section aria-label="Seção de contato" id="contact" className="container mx-auto min-h-dvh">
      <RevealOnScroll>
        <p className={titleClass}>CONTATO</p>
      </RevealOnScroll>
      <div className="flex justify-between">
        <ContactText />
        <ContactForm />
      </div>
    </section>
  )
}