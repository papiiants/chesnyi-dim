'use client'

import './Header.scss'
import Menu from '@/components/Menu'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IMAGES } from '@/constants/content'
import BurgerButton from '@/components/BurgerButton'
import Reveal from '@/components/Reveal'
import { WPMenuItem } from '@/types/wordpress'

interface HeaderProps {
  menu: WPMenuItem[]
}

export default function Header({ menu }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const handleScroll = () => {
      header.classList.toggle('header--sticky', window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
    document.body.classList.toggle('is-fixed', !isMobileMenuOpen)
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
                height={60}
              />
            </Link>
          </div>
        </Reveal>

        <Menu menu={menu} className="menu--desktop" />

        <BurgerButton
          isOpen={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          aria-controls="mobile-menu"
        />
      </div>

      <Menu
        menu={menu}
        isOpen={isMobileMenuOpen}
        className="menu--mobile"
        onItemClick={toggleMobileMenu}
      />
    </header>
  )
}
