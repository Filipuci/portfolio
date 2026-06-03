import { RevealOnScroll } from "../common/RevealOnScroll"
import type { ProjectType } from "../types/ProjectType"
import { Card, CardContent } from "../ui/card"
import { ProjectActions } from "./ProjectActions"

type Props = {
  project: ProjectType
}

export const FeaturedProjectCard = ({ project }: Props) => {
  return (
    <RevealOnScroll className="col-span-full" threshold={0.1}>
      <Card className="hover:-translate-y-0.5 transition-transform duration-300">
        <CardContent className="flex gap-4 px-7">
          <div className="mt-5 flex flex-col items-center sm:block">
            <div className="bg-[#151829] rounded-sm px-2 inline-block select-none">
              <span className="text-category-project font-semibold text-[12px]">{project.category}</span>
            </div>
            <h1 className="font-bold text-5xl my-4 select-none">{project.title}</h1>
            <p className="text-white/60 mb-10 sm:w-2/3">{project.shortDescription}</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-15 select-none">
              {project.technologies.map(technology => (
                <div
                  key={technology}
                  className="px-3 py-1 rounded-sm bg-[#1a1b1e]"
                >
                  {technology}
                </div>
              ))}
            </div>
            <ProjectActions
              codeUrl={project.codeUrl}
              projectUrl={project.projectUrl}
            />
          </div>

          <div className="hidden sm:flex sm:items-center max-h-100 w-full">
            <img
              src={project.image}
              alt={`Screenshot do projeto ${project.title}`}
              className="
                    rounded-md
                    h-full
                    w-full
                    object-cover
                    xl:object-top
                    transition-transform
                    duration-500
                    hover:scale-103
                    select-none
                  "
            />
          </div>
        </CardContent>
      </Card>
    </RevealOnScroll>
  )
}