import { headlineClass, textClass } from "../common/constants"
import { RevealOnScroll } from "../common/RevealOnScroll"
import { Separator } from "../ui/separator"

const CONTACT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Filipuci', target: '_blank' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafael-filipuci/', target: '_blank' },
  { label: 'E-mail', href: 'mailto:rafaellifipuci@outlook.com', target: '_self' },
] as const

export const ContactText = () => {


  return (
    <div className="max-w-1/3">
      <RevealOnScroll>
        <h1 className={headlineClass}>Vamos construir algo juntos.</h1>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className={`${textClass} mb-6 mt-10`}>Estou disponível para oportunidades de emprego e projetos freelance.</p>
        <p className={`${textClass} my-6`}>Gosto de trabalhar em projetos que resolvem problemas de verdade e geram resultado
          para quem usa. Se você tem um projeto em mente ou quer conversar sobre front-end, entre em contato comigo.</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <div className="mt-10">
          <p className={`${textClass} text-[11px]`}>DISPONIBILIDADE</p>
          <p className="text-sm mb-5 mt-1">Disponivel para novas oportunidades</p>
          <Separator />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="mt-10 font-bold">Vamos nos conectar</p>
        <div className="flex gap-10 mt-2 text-[#9a9ceb]">
          {CONTACT_LINKS.map(({ label, href, target }) => (
            <a
              key={href}
              href={href}
              target={target}
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 hover:translate-x-0.5 transition-transform duration-200"
            >
              {label} ↗
            </a>
          ))}

        </div>
      </RevealOnScroll>

    </div>
  )
}