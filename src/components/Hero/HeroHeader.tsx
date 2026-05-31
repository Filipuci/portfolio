import { ModeToggle } from "../mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

const NAV_LINKS = [
  { href: "#", label: "Inicio" },
  { href: "#projects", label: "Projetos" },
  { href: "#about", label: "Sobre mim" },
  { href: "#contact", label: "Contato" }
] as const

const navLinkClass = `
  relative
  text-white/70 hover:text-white
  transition-colors duration-300
  after:absolute after:bottom-0 after:left-0
  after:h-[2px] after:w-full
  after:bg-white
  after:scale-x-0 hover:after:scale-x-100
  after:transition-transform after:duration-600
  after:origin-left hover:after:origin-left
`

const menuBtnClass = "h-0.5 w-5 bg-white"

export const HeroHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex gap-5 justify-between pt-10 pb-3 px-2">
        <div className="flex gap-1 items-center text-xl select-none font-extrabold">Rafael<span className="text-white/40">Filipuci</span></div>
        <div className="flex items-center gap-3 md:hidden">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-col gap-1">
              <div className={menuBtnClass}></div>
              <div className={menuBtnClass}></div>
              <div className={menuBtnClass}></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {NAV_LINKS.map(({ href, label }) => (
                <DropdownMenuItem key={href}>
                  <a href={href} className={navLinkClass}>
                    {label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <nav aria-label="Navegação principal">
            <ul className="flex gap-10">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={navLinkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </div>

    </header>
  )
}