import { headlineClass, textClass } from "../common/constants"
import { RevealOnScroll } from "../common/RevealOnScroll"

export const ProjectHeader = () => {

  return (
    <header className={`flex flex-col items-center text-center lg:text-left lg:block lg:max-w-2/5`}>
      <RevealOnScroll threshold={0.4}>
        <p className='select-none text-category-project text-sm font-semibold mb-3'>PROJETOS</p>
      </RevealOnScroll>

      <RevealOnScroll threshold={0.4}>
        <h1 className={headlineClass}>Projetos que contam minha evolução</h1>
      </RevealOnScroll>

      <RevealOnScroll threshold={0.4} className="flex justify-center">
        <p className={`${textClass} my-6`}>
          Cada projeto representa um desafio diferente, uma habilidade aprendida
          e um passo a mais na minha jornada como desenvolvedor front-end.
        </p>
      </RevealOnScroll>
    </header>
  )
}