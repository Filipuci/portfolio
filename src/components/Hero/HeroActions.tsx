import { Download } from "lucide-react"
import { Github, Linkedin } from "../icons/brand-icons"
import { Button } from "../ui/button"

export const HeroActions = () => {
  return (
    <div className="flex gap-5">
      <a href="/Rafael_Filipuci_CV.pdf" download>
        <Button className="p-5 cursor-pointer"><Download /> Baixar CV</Button>
      </a>
      <Button className="bg-[#030303] p-5 border border-white/10 text-white/60">
        <a
          href="https://github.com/Filipuci"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition duration-300"
        >
          <Github aria-hidden="true" />
        </a>
        <span className="text-white/10 mx-2">|</span>
        <a
          href="https://www.linkedin.com/in/rafael-filipuci/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition duration-300"
        >
          <Linkedin aria-hidden="true" />
        </a>
      </Button>
    </div>
  )
}