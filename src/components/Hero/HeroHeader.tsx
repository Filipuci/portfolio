import { ModeToggle } from "../mode-toggle"

const NAV_LINKS = [
  { href: "#projects", label: "Projetos" },
  { href: "#about", label: "Sobre mim" },
  { href: "#contact", label: "Contato" }
] as const

const navLinkClass = "text-white/70 hover:text-white transition duration-300"

export const HeroHeader = () => {
  return (
    <header className="flex gap-5 justify-between pt-10 pb-3 px-2">
      <div className="flex gap-1 items-center text-xl"><span className="font-bold">Rafael</span>Filipuci</div>
      <div className="flex items-center gap-10">
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
    </header>
  )
}