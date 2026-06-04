import { RevealOnScroll } from "../common/RevealOnScroll"
import { aboutTitleClass } from "./constants"

const separatorClass = 'text-category-project text-lg'
const aboutTechnologiesList = ['React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI', 'Tanstack Query', 'React Hook Form', 'Zod']

export const AboutTechnologies = () => {
  return (
    <div className="mt-10">
      <RevealOnScroll>
        <p className={aboutTitleClass}>TECNOLOGIAS</p>
      </RevealOnScroll>

      <RevealOnScroll>
        <ul className="flex gap-5 items-center">
          {aboutTechnologiesList.map((technology, index) => (
            <li key={technology} className="flex items-center gap-5">
              <p>{technology}</p>

              {index < aboutTechnologiesList.length - 1 && (
                <p className={separatorClass}>•</p>
              )}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </div>
  )
}