import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useRef } from "react"

export const RevealOnScroll = ({ children, className, threshold }: { children: React.ReactNode, className?: string, threshold: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver({ ref, threshold })

  return (
    <div className={`opacity-0 ${isVisible ? 'animate-fade-up' : ''} ${className}`} ref={ref}>
      {children}
    </div>
  )
}