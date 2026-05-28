import { useEffect, useState } from "react"

export const useTypingAnimation = (words: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[currentIndex])
  const [wordPhase, setWordPhase] = useState('waiting')

  useEffect(() => {
    const delay = wordPhase === 'deleting' ? 45 : wordPhase === 'typing' ? 70 : 1800

    const timeout = setTimeout(() => {
      if (wordPhase === 'waiting') {
        setWordPhase('deleting')
      }

      if (wordPhase === 'deleting') {
        setCurrentWord(currentWord.slice(0, -1))
        if (currentWord.length === 0) {
          const nextIndex = (currentIndex + 1) % words.length
          setWordPhase('typing')
          setCurrentIndex(nextIndex)
          setCurrentWord(words[nextIndex][0])
        }
      } else if (wordPhase === 'typing') {
        const fullWord = words[currentIndex]
        const next = fullWord.slice(0, currentWord.length + 1)
        setCurrentWord(next)
        if (next === fullWord) {
          setWordPhase('waiting')
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [currentWord, wordPhase])

  return { currentWord }
}
