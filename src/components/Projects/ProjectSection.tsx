import { ProjectGrid } from "./ProjectGrid"
import { ProjectHeader } from "./ProjectHeader"

export const ProjectSection = () => {
  return (
    <section aria-label="Seção de projetos" id="projects" className="container mx-auto min-h-dvh bg-[#030303] flex flex-col py-18">
      <ProjectHeader />
      <ProjectGrid />
    </section>
  )
}