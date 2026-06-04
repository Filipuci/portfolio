import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useRef } from "react"

type Props = {
  children: React.ReactNode,
  className?: string,
  threshold?: number,
  animation?: string
}

export const RevealOnScroll = ({ children, className, threshold, animation = "animate-fade-up" }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref, threshold)

  return (
    <div className={`opacity-0 ${isVisible ? animation : ''} ${className}`} ref={ref}>
      {children}
    </div>
  )
}