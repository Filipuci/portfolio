import { ModeToggle } from "../mode-toggle"

export const HeroHeader = () => {
  return (
    <header className="flex gap-5 justify-between pt-10 pb-3 px-2">
      <div className="flex gap-1 items-center text-xl"><span className="font-bold">Rafael</span>Filipuci</div>
      <div className="flex items-center gap-10">
        <nav>
          <ol className="flex gap-10">
            <li>Projetos</li>
            <li>Sobre mim</li>
            <li>Contato</li>
          </ol>
        </nav>

        <ModeToggle />
      </div>

    </header>
  )
}