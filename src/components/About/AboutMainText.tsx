import { RevealOnScroll } from "../common/RevealOnScroll"
import { headlineClass, textClass, titleClass } from "../common/constants"

export const AboutMainText = () => {
  return (
    <div className="text-center lg:text-start lg:max-w-2/6 xl:max-w-2/5">
      <RevealOnScroll threshold={0.4}>
        <p className={titleClass}>SOBRE MIM</p>
      </RevealOnScroll>

      <RevealOnScroll threshold={0.4}>
        <h1 className={headlineClass}>Minha trajetória<span className="text-category-project">.</span></h1>
      </RevealOnScroll>

      <RevealOnScroll threshold={0.4} className="flex flex-col items-center lg:items-start">
        <p className={`${textClass} my-6`}>
          Meu interesse por tecnologia começou com o desenvolvimento de jogos, mas foi no desenvolvimento front-end que encontrei algo que realmente me motivava: a capacidade de transformar ideias em interfaces que resolvem problemas reais.
        </p>

        <p className={`${textClass} my-6`}>
          Sempre gostei da sensação de identificar uma necessidade e poder construir a solução por conta própria. Quando não encontro uma ferramenta que resolva um problema da forma que preciso, minha primeira reação costuma ser abrir o VS Code e tentar criar uma.
        </p>

        <p className={`${textClass} my-6`}>
          Hoje desenvolvo aplicações com React, TypeScript e TailwindCSS, focando em criar interfaces intuitivas, acessíveis e fáceis de manter.
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="flex flex-col gap-10 mt-12 mb-20 sm:flex-row sm:justify-center xl:justify-start sm:gap-20 lg:mb-0">
        <div>
          <p className={titleClass}>LOCALIZAÇÃO</p>
          <p>São Bernardo do Campo, SP</p>
        </div>

        <div>
          <p className={titleClass}>INTERESSES</p>
          <p>Front-End, UI/UX</p>
        </div>
      </RevealOnScroll>
    </div>
  )
}