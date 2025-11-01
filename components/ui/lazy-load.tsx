import { useInView } from "framer-motion"
import { type ReactNode, useEffect, useRef, useState } from "react"

type LazyLoadProps = {
  children: ReactNode
  threshold?: number
}

export const LazyLoad = ({ children, threshold = 0.1 }: LazyLoadProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isInView && !isLoaded) {
      setIsLoaded(true)
    }
  }, [isInView, isLoaded])

  return (
    <div ref={ref}>
      {isLoaded ? children : <div className="min-h-[100px]" />}
    </div>
  )
}
