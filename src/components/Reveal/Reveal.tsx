'use client'

import useInView from '@/hooks/useInView'

import React, { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  once?: boolean
  rootMargin?: string
  threshold?: number
  activeClass?: string
  effect?: string
  delay?: number
}

export default function Reveal({
  children,
  className = '',
  once = true,
  rootMargin = '-50px 0px',
  threshold = 0.15,
  activeClass = 'in-view',
  effect = 'slide-left',
  delay = 0.2,
  ...props
}: RevealProps) {
  const { ref, className: inViewClass } = useInView<HTMLDivElement>({
    once,
    activeClass,
    threshold,
    rootMargin
  })

  return (
    <div
      ref={ref}
      className={clsx('reveal', effect, inViewClass, className)}
      style={
        {
          '--reveal-delay': `${delay}s`
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  )
}
