import { RevealOnScroll } from "../common/RevealOnScroll"
import type { ProjectType } from "../types/ProjectType"
import { Card, CardContent } from "../ui/card"
import { ProjectActions } from "./ProjectActions"

type Props = {
  project: ProjectType
}

export const ProjectCard = ({ project }: Props) => {
  return (

    <RevealOnScroll threshold={0.1}>
      <Card className="hover:-translate-y-0.5 transition-transform duration-300">
        <CardContent className="flex gap-4">
          <div className="flex items-center">
            <img
              src={project.image}
              alt={`Screenshot do projeto ${project.title}`}
              className="
              rounded-md
              h-full
              w-full
              object-cover
              object-top-left
              transition-transform
              duration-500
              hover:scale-103
              select-none
            "
            />
          </div>

          <div>
            <div className="bg-[#151829] rounded-sm px-2 inline-block select-none">
              <span className="text-category-project font-semibold text-[12px]">{project.category}</span>
            </div>
            <h1 className="font-bold text-xl my-2 select-none">{project.title}</h1>
            <p className="text-white/60 mb-5">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(technology => (
                <div
                  key={technology}
                  className="px-3 py-1 rounded-sm bg-[#1a1b1e] select-none"
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

        </CardContent>
      </Card>
    </RevealOnScroll>
  )
} 