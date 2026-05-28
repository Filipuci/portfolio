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
      <p className="select-none text-white/40 text-sm mb-6">FRONT-END DEVELOPER</p>
      <p className="select-none text-6xl font-semibold">Criando</p>
      <p className={gradientTextClass}>
        {`interfaces ${currentWord}`}<span className={`${gradientTextClass} animate-pulse`}>|</span>
      </p>
      <p className="select-none text-center sm:text-left text-6xl font-semibold">
        com precisão.
      </p>
      <p className="text-white/70 my-6 w-[60%] text-center lg:w-full lg:text-left">
        Desenvolvedor front-end focado em interfaces modernas, arquitetura escalável e código bem estruturado.
      </p>
    </>
  )
}