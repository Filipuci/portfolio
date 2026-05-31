import { Card, CardContent } from "../ui/card"
import { ProjectActions } from "./ProjectActions"
import { FeaturedProjectData } from "@/data/ProjectData"

export const FeaturedProjectCard = () => {
  return (
    <Card className="col-span-full">
      <CardContent className="flex gap-4 px-7">
        <div className="mt-5">
          <div className="bg-[#151829] rounded-sm px-2 inline-block"><span className="text-category-project font-semibold text-sm">{FeaturedProjectData.category}</span></div>
          <h1 className="font-bold text-5xl my-2">{FeaturedProjectData.title}</h1>
          <p className="text-white/60 mb-5 w-2/3">{FeaturedProjectData.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {FeaturedProjectData.technologies.map(technology => (
              <div className="px-3 py-1 rounded-sm bg-[#1a1b1e]">{technology}</div>
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
            alt={`${FeaturedProjectData.title} image`}
            className="
                    rounded-md
                    h-full
                    w-full
                    object-cover
                    object-top-left
                    transition-transform
                    duration-500
                    hover:scale-103
                  "
          />
        </div>
      </CardContent>
    </Card>
  )
}