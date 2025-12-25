'use client'

import { DynamicIcon } from 'lucide-react/dynamic'
import type { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import Link from 'next/link'
import './IconBox.scss'

type IconName = keyof typeof dynamicIconImports

interface IconBoxProps extends LucideProps {
  name: IconName
  title?: string
  description?: string
  link?: string
  linkText?: string
}

export default function IconBox({
  name = 'mail',
  title,
  description,
  link,
  linkText,
  ...iconProps
}: IconBoxProps) {
  return (
    <div className="icon-box">
      <DynamicIcon
        className="icon-box__icon"
        name={name}
        width={18}
        {...iconProps}
      />
      <div className="icon-box__content">
        {title && <div className="icon-box__title">{title}</div>}
        {description && (
          <div className="icon-box__description">{description}</div>
        )}
        {link && (
          <Link className="icon-box__link" href={link}>
            {linkText}
          </Link>
        )}
      </div>
    </div>
  )
}
