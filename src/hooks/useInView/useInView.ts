'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean
  activeClass?: string
}

export default function useInView<T extends HTMLElement = HTMLElement>({
  once = true,
  activeClass = 'in-view',
  threshold = 0.1,
  rootMargin = '0px',
  root = null
}: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<T>(null) // Теперь ref имеет тип T

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin, root }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [once, threshold, rootMargin, root])

  return { ref, className: isInView ? activeClass : '' }
}
