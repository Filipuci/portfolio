import { ExternalLink } from "lucide-react"
import { Github } from "../icons/brand-icons"
import { Button } from "../ui/button"

type Props = {
  codeUrl: string,
  projectUrl: string
}

export const ProjectActions = ({ codeUrl, projectUrl }: Props) => {
  return (
    <div className="flex gap-2 mt-5">
      <Button className="cursor-pointer p-5">
        <a
          href={projectUrl}
          className="flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Project"
        >
          <ExternalLink /> Ver projeto
        </a>
      </Button>

      <Button
        className="bg-[#030303] cursor-pointer p-5 border border-white/10 text-white/70 hover:text-white transition duration-300">
        <a
          href={codeUrl}
          className="flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github /> Código
        </a>
      </Button>
    </div>
  )
}