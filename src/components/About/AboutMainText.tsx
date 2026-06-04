import { RevealOnScroll } from "../common/RevealOnScroll"
import { aboutTextClass, aboutTitleClass } from "./constants"

export const AboutMainText = () => {
  return (
    <div className="max-w-2/6">
      <RevealOnScroll threshold={0.4}>
        <p className={aboutTitleClass}>SOBRE MIM</p>
      </RevealOnScroll>

      <RevealOnScroll threshold={0.4}>
        <h1 className={'select-none text-6xl font-semibold mb-3'}>Minha trajetória<span className="text-category-project">.</span></h1>
      </RevealOnScroll>

      <RevealOnScroll threshold={0.4} className="flex flex-col">
        <p className={aboutTextClass}>
          Meu interesse por tecnologia começou com o desenvolvimento de jogos, mas foi no desenvolvimento front-end que encontrei algo que realmente me motivava: a capacidade de transformar ideias em interfaces que resolvem problemas reais.
        </p>

        <p className={aboutTextClass}>
          Sempre gostei da sensação de identificar uma necessidade e poder construir a solução por conta própria. Quando não encontro uma ferramenta que resolva um problema da forma que preciso, minha primeira reação costuma ser abrir o VS Code e tentar criar uma.
        </p>

        <p className={aboutTextClass}>
          Hoje desenvolvo aplicações com React, TypeScript e TailwindCSS, focando em criar interfaces intuitivas, acessíveis e fáceis de manter.
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="flex gap-20 mt-12">
        <div>
          <p className={aboutTitleClass}>LOCALIZAÇÃO</p>
          <p>São Paulo, Brasil</p>
        </div>

        <div>
          <p className={aboutTitleClass}>INTERESSES</p>
          <p>Front-End, UI/UX e Resolução de problemas</p>
        </div>
      </RevealOnScroll>
    </div>
  )
}