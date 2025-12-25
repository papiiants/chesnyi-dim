'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
  partialActive?: boolean
  exact?: boolean
  onClick?: () => void
}

export default function ActiveLink({
  href,
  children,
  className = 'menu__link',
  activeClassName = 'menu__link--active',
  onClick,
  partialActive = false,
  exact = false
}: ActiveLinkProps) {
  const pathname = usePathname()

  const normalizedHref = href.startsWith('/') ? href : `/${href}`
  const cleanHref = normalizedHref.replace(/\/$/, '') || '/'
  const cleanPathname = pathname.replace(/\/$/, '') || '/'

  let isActive = false

  if (exact) {
    isActive = cleanPathname === cleanHref
  } else if (partialActive) {
    isActive =
      cleanPathname === cleanHref || cleanPathname.startsWith(`${cleanHref}/`)
  } else {
    isActive = cleanPathname === cleanHref
  }

  return (
    <Link
      href={href}
      className={clsx(className, { [activeClassName]: isActive })}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}
