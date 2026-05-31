import { ProjectData } from "@/data/ProjectData"
import { ProjectCard } from "./ProjectCard"
import { FeaturedProjectCard } from "./FeaturedProjectCard"

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-3 pt-3">
      <FeaturedProjectCard />

      {ProjectData.map(project => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  )
}