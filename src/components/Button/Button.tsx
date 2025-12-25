// components/Button.tsx (или где у тебя лежит компонент)

import './Button.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface ButtonProps {
  className?: string
  href?: string
  isDisabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'accent'
  onClick?: (e: React.MouseEvent) => void
  children: ReactNode
}

const Button = ({
  className,
  href,
  isDisabled = false,
  type = 'button',
  variant = 'primary',
  onClick,
  children
}: ButtonProps) => {
  const buttonClasses = clsx('button', `button--${variant}`, className, {
    'button--disabled': isDisabled
  })

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        {...(isDisabled && { 'aria-disabled': true })}
      >
        <span>{children}</span>{' '}
      </Link>
    )
  }

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
