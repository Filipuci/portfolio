import { RevealOnScroll } from "../common/RevealOnScroll"
import { titleClass } from "../common/constants"

const separatorClass = 'text-category-project text-lg'
const aboutTechnologiesList = ['React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI', 'Tanstack Query', 'React Hook Form', 'Zod']

export const AboutTechnologies = () => {
  return (
    <div className="text-center lg:text-start">
      <RevealOnScroll>
        <p className={titleClass}>TECNOLOGIAS</p>
      </RevealOnScroll>

      <RevealOnScroll>
        <ul className="flex flex-wrap lg:flex-nowrap gap-5 items-center justify-center lg:justify-start">
          {aboutTechnologiesList.map((technology, index) => (
            <li key={technology} className="flex items-center gap-5">
              <p>{technology}</p>

              {index < aboutTechnologiesList.length - 1 && (
                <p className={`${separatorClass} hidden lg:block select-none`}>•</p>
              )}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </div>
  )
}