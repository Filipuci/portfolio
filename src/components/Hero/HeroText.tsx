import { useTypingAnimation } from "@/hooks/useTypingAnimation"

const ROTATING_WORDS = ['modernas', 'acessíveis', 'escaláveis', 'intuitivas', 'minimalistas']
const gradientTextClass = `
    select-none text-center 
    sm:text-left text-6xl 
    font-semibold bg-linear-to-r 
    from-[#b8c0ff] via-[#d8b4fe] 
    to-[#e7c9a9] bg-clip-text 
    text-transparent
    `

export const HeroText = () => {
  const { currentWord } = useTypingAnimation(ROTATING_WORDS)

  return (
    <>
      <p className="select-none text-white/40 text-sm mb-6 animate-fade-up [animation-delay:0ms]">FRONT-END DEVELOPER</p>
      <p className="select-none text-6xl font-semibold animate-fade-up opacity-0 [animation-delay:100ms]">Criando</p>
      <div className={`${gradientTextClass} flex flex-col min-[1550px]:flex-row min-[1550px]:gap-2 animate-fade-up opacity-0 [animation-delay:200ms]`}>
        <p>interfaces</p>
        <p>{currentWord}<span className={`${gradientTextClass} animate-pulse `}>|</span></p>
      </div>
      <p className="select-none text-center sm:text-left text-6xl font-semibold animate-fade-up opacity-0 [animation-delay:300ms]">
        com precisão.
      </p>
      <p className="text-white/70 my-6 w-[60%] text-center lg:w-full lg:text-left animate-fade-up opacity-0 [animation-delay:400ms]">
        Comecei querendo criar jogos. Acabei me apaixonando por front-end, tinha algo de mágico em ver
        uma div virar um elemento na tela. Hoje desenvolvo com React e TypeScript, e me preocupo com
        código que outras pessoas consigam entender e dar manutenção.
      </p>
    </>
  )
}