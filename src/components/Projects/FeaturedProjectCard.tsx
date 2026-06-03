import { RevealOnScroll } from "../common/RevealOnScroll"
import { Card, CardContent } from "../ui/card"
import { ProjectActions } from "./ProjectActions"
import { FeaturedProjectData } from "@/data/ProjectData"

export const FeaturedProjectCard = () => {
  return (
    <RevealOnScroll className="col-span-full" threshold={0.1}>
      <Card className="hover:-translate-y-0.5 transition-transform duration-300">
        <CardContent className="flex gap-4 px-7">
          <div className="mt-5">
            <div className="bg-[#151829] rounded-sm px-2 inline-block select-none">
              <span className="text-category-project font-semibold text-[12px]">{FeaturedProjectData.category}</span>
            </div>
            <h1 className="font-bold text-5xl my-4 select-none">{FeaturedProjectData.title}</h1>
            <p className="text-white/60 mb-10 w-2/3">{FeaturedProjectData.shortDescription}</p>
            <div className="flex flex-wrap gap-2 mb-15 select-none">
              {FeaturedProjectData.technologies.map(technology => (
                <div
                  key={technology}
                  className="px-3 py-1 rounded-sm bg-[#1a1b1e]"
                >
                  {technology}
                </div>
              ))}
            </div>
            <ProjectActions
              codeUrl={FeaturedProjectData.codeUrl}
              projectUrl={FeaturedProjectData.projectUrl}
            />
          </div>

          <div className="flex items-center max-h-100 w-full">
            <img
              src={FeaturedProjectData.image}
              alt={`Screenshot do projeto ${FeaturedProjectData.title}`}
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
        </CardContent>
    </Card>
    </RevealOnScroll>
  )
}