import { ExternalLink } from "lucide-react"
import { Github } from "../icons/brand-icons"
import { Button } from "../ui/button"

export const ProjectActions = () => {
  return (
    <div className="flex gap-2 mt-5">
      <Button className="cursor-pointer p-5"><ExternalLink /> Ver projeto</Button>
      <Button className="bg-[#030303] text-white cursor-pointer p-5 border border-white/10"><Github className="text-white"/> Código</Button>
    </div>
  )
}