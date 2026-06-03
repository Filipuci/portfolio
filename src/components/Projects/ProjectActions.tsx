import { ExternalLink } from "lucide-react"
import { Github } from "../icons/brand-icons"
import { buttonVariants } from "../ui/button"

type Props = {
  codeUrl: string,
  projectUrl: string
}

export const ProjectActions = ({ codeUrl, projectUrl }: Props) => {
  return (
    <div className="flex gap-2 mt-5">
      <a
        href={projectUrl}
        className={`
          ${buttonVariants({variant: "ghost"})} 
          flex items-center gap-1 cursor-pointer 
          p-5 bg-white text-black/70
          hover:text-black`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Project"
      >
        <ExternalLink /> Ver projeto
      </a>

      <a
        href={codeUrl}
        className={`
            ${buttonVariants({variant: "ghost"})}
            flex items-center gap-1 
            bg-[#030303] cursor-pointer 
            p-5 border border-white/10 
            text-white/70 hover:text-white 
            transition duration-300
            `}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github /> Código
      </a>
    </div>
  )
}