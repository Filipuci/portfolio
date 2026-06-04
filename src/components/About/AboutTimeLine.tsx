import { RevealOnScroll } from "../common/RevealOnScroll"
import { aboutTextClass, aboutTitleClass } from "./AboutMainText"

export const AboutTimeLine = () => {
  return (
    <div className="ml-20">
      <RevealOnScroll>
        <p className={aboutTitleClass}>EXPERIÊNCIA</p>
      </RevealOnScroll>

      <RevealOnScroll animation="animate-fade-right" threshold={0.4}>
        <div className="relative border-l border-white/10 pl-8 mt-10">
          <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-[#6365e0]"></div>

          <p className={aboutTitleClass}>Dez 2024 - Fev 2026</p>
          <h1 className="font-semibold text-xl">Assistente de suporte técnico</h1>
          <p className={aboutTextClass}>K2 Network</p>
          <p className={`${aboutTextClass} max-w-2/4`}>
            Atuação em suporte técnico para uma provedora de internet (ISP), realizando diagnóstico
            e resolução de problemas técnicos em ambiente de alta demanda, investigação de incidentes,
            análise de conectividade e acompanhamento de chamados.
          </p>
          <p className={`${aboutTextClass} max-w-2/4`}>
            A experiência fortaleceu habilidades como resolução de problemas, pensamento analítico,
            documentação técnica e comunicação entre equipes, competências que aplico diariamente
            no desenvolvimento de software.
          </p>
        </div>
      </RevealOnScroll >

    </div >
  )
}