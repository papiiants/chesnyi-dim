'use client'

import { ReactNode } from 'react'
import './Section.scss'
import clsx from 'clsx'
import Reveal from '@/components/Reveal'

export interface SectionProps {
  id: string
  title?: string
  hasHeaderDecoration?: boolean
  headingLevel?: 'h1' | 'h2'
  description?: string
  className: string
  backgroundImage?: string
  backgroundColor?: string
  overlay?: boolean
  divider?: boolean
  dividerColor?: 'white' | 'bg' | 'primary'
  effect?: string
  hasUpperShadow?: boolean
  children?: ReactNode
}

export default function Section(props: SectionProps) {
  const {
    className,
    id,
    title,
    hasHeaderDecoration = false,
    headingLevel,
    description,
    children,
    backgroundImage,
    backgroundColor,
    overlay,
    divider = 'true',
    dividerColor = 'white',
    effect,
    hasUpperShadow
  } = props

  const HeadingTag = headingLevel || 'h2'

  return (
    <section
      className={clsx('section', `section-${className}`, {
        [`section-${className}--has-upper-shadow`]: hasUpperShadow
      })}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor: backgroundColor || undefined,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      aria-labelledby={`${id}-title`}
    >
      {overlay && backgroundImage && (
        <div className="section__overlay" aria-hidden="true" />
      )}
      <div className={`container section__inner section-${className}__inner`}>
        {title && (
          <Reveal effect={effect}>
            <HeadingTag
              className={clsx('section__title', `section-${className}__title`, {
                'section__title--decorated': hasHeaderDecoration,
                [`section-${className}__title--decorated`]: hasHeaderDecoration
              })}
              id={`${id}-title`}
            >
              {title}
            </HeadingTag>
          </Reveal>
        )}
        {description && (
          <Reveal delay={0.8}>
            <p className="section__description">{description}</p>
          </Reveal>
        )}
        {children}
      </div>
      {divider && (
        <div
          className={clsx(
            'section__divider',
            'section__divider--bottom',
            `section__divider--${dividerColor}`
          )}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="shape-fill"
            />
          </svg>
        </div>
      )}
    </section>
  )
}
