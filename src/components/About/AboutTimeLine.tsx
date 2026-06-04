import { RevealOnScroll } from "../common/RevealOnScroll"
import { aboutTextClass, aboutTitleClass } from "./constants"

export const AboutTimeLine = () => {
  return (
    <RevealOnScroll
      animation="animate-fade-up sm:animate-fade-right"
      threshold={0.6}
      className="text-center lg:text-start"
    >
      <p className={aboutTitleClass}>EXPERIÊNCIA</p>

      <div className="relative lg:border-l lg:border-white/10 lg:pl-8 mt-10 flex flex-col items-center lg:block">
        <div className="absolute hidden lg:block sm:-left-1.5 top-1 w-3 h-3 rounded-full bg-[#6365e0]"></div>

        <p className={aboutTitleClass}>Dez 2024 - Fev 2026</p>
        <h1 className="font-semibold text-xl">Assistente de suporte técnico</h1>
        <p className={aboutTextClass}>K2 Network</p>
        <p className={`${aboutTextClass} sm:max-w-1/2`}>
          Suporte técnico em provedora de internet, com diagnóstico de problemas de conectividade,
          investigação de incidentes e acompanhamento de chamados em ambiente de alta demanda.
        </p>
        <p className={`${aboutTextClass} sm:max-w-1/2`}>
          A experiência fortaleceu resolução de problemas, pensamento analítico e comunicação
          entre equipes, competências que aplico diretamente no desenvolvimento.
        </p>
      </div>
    </RevealOnScroll >
  )
}