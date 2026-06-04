import { aboutTitleClass } from "./AboutMainText"

const technologieSeparatorClass = 'text-category-project text-lg'
const aboutTechnologiesList = ['React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI', 'Tanstack Query', 'React hook form', 'Zod']

export const AboutTechnologies = () => {
  return (
    <div className="mt-10">
      <p className={aboutTitleClass}>TECNOLOGIAS</p>
      <ul className="flex gap-5 items-center">
        {aboutTechnologiesList.map((technology, index) => (
          <li key={technology} className="flex items-center gap-5">
            <p>{technology}</p>

            {index < aboutTechnologiesList.length - 1 && (
              <p className={technologieSeparatorClass}>•</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}