import { ProjectData } from "@/data/ProjectData"
import { ProjectCard } from "./ProjectCard"

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-3 pt-3">
      {ProjectData.map(project => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  )
}