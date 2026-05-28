import { useEffect, useState } from "react"

export const HeroText = () => {
  const interfaceWordList = ['modernas', 'acessíveis', 'escaláveis', 'intuitivas', 'minimalistas']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [interfaceWord, setInterfaceWord] = useState(interfaceWordList[currentIndex])
  const [wordPhase, setWordPhase] = useState('waiting')
  const headlineColor = `
      select-none text-center 
      sm:text-left text-6xl 
      font-semibold bg-linear-to-r 
      from-[#b8c0ff] via-[#d8b4fe] 
      to-[#e7c9a9] bg-clip-text 
      text-transparent
      `

  useEffect(() => {
    const delay = wordPhase === 'deleting' ? 45 : wordPhase === 'typing' ? 70 : 1800

    const timeout = setTimeout(() => {
      if (wordPhase === 'waiting') {
        setWordPhase('deleting')
      }

      if (wordPhase === 'deleting') {
        setInterfaceWord(interfaceWord.slice(0, -1))
        if (interfaceWord.length === 0) {
          const nextIndex = (currentIndex + 1) % interfaceWordList.length
          setWordPhase('typing')
          setCurrentIndex(nextIndex)
          setInterfaceWord(interfaceWordList[nextIndex][0])
        }
      } else if (wordPhase === 'typing') {
        const fullWord = interfaceWordList[currentIndex]
        const next = fullWord.slice(0, interfaceWord.length + 1)
        setInterfaceWord(next)
        if (next === fullWord) {
          setWordPhase('waiting')
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [interfaceWord, wordPhase])

  return (
    <>
      <p className="select-none text-white/40 text-sm mb-6">FRONT-END DEVELOPER</p>
      <p className="select-none text-6xl font-semibold">Criando</p>
      <p className={headlineColor}>
        {`interfaces ${interfaceWord}`}<span className={`${headlineColor} animate-pulse`}>|</span>
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