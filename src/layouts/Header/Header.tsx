'use client'

import './Header.scss'
import Menu from '@/components/Menu'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IMAGES } from '@/constants/content'
import BurgerButton from '@/components/BurgerButton'
import Reveal from '@/components/Reveal'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const handleScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('header--sticky')
      } else {
        header.classList.remove('header--sticky')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const onToggle = () => {
    document.body.classList.toggle('is-fixed')
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header ref={headerRef} className="header">
      <div className="container header__container">
        <Reveal effect="slide-left" delay={0}>
          <div className="header__logo">
            <Link href="/">
              <img
                src={IMAGES.logo}
                alt="Логотип Чесний Дім"
                className="header__logo-image"
                width={150}
              />
            </Link>
          </div>
        </Reveal>
        <Menu />
        <BurgerButton
          isOpen={isMobileMenuOpen}
          onClick={onToggle}
          aria-controls="menu"
        />

        <Menu
          isOpen={isMobileMenuOpen}
          className="menu--mobile"
          onItemClick={onToggle}
        />
      </div>
    </header>
  )
}
