import { useEffect, useState } from "react"

export const useIntersectionObserver = ({ ref, threshold }: { ref: React.RefObject<HTMLDivElement | null>, threshold: number }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
        observer.unobserve(ref.current!)
      }
    }, { threshold })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return isVisible
}