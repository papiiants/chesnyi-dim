'use client'

import './Menu.scss'
import { WPMenuItem, WPSubMenuItem } from '@/types/wordpress'
import ActiveLink from '@/components/ActiveLink'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import useMenu from '@/hooks/useMenu'

interface MenuProps {
  isOpen?: boolean
  className?: string
  onItemClick?: () => void
}

export default function Menu({
  isOpen = true,
  className,
  onItemClick
}: MenuProps) {
  const { menu, loading, error } = useMenu()

  if (loading) {
    return (
      <nav
        className={clsx('header__menu menu', className, {
          'menu--open': isOpen
        })}
      >
        <ul className="menu__list skeleton">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="menu__item skeleton-item" />
          ))}
        </ul>
      </nav>
    )
  }

  if (error) {
    return (
      <nav className={clsx('header__menu menu', className)}>
        <ul className="menu__list">
          <li className="menu__item">Меню недоступне</li>
        </ul>
      </nav>
    )
  }

  return (
    <nav
      className={clsx('header__menu menu', className, {
        'menu--open': isOpen
      })}
      aria-hidden={!isOpen}
    >
      <ul className="menu__list" role="menu">
        {menu.map((item: WPMenuItem) => {
          const hasSubmenu =
            Array.isArray(item.submenu) && item.submenu.length > 0

          const submenuItems: WPSubMenuItem[] = Array.isArray(item.submenu)
            ? item.submenu
            : []

          return (
            <li
              key={item.title}
              className={
                hasSubmenu ? 'menu__item menu__item--has-submenu' : 'menu__item'
              }
              role="menuitem"
            >
              <ActiveLink
                href={item.slug}
                partialActive={hasSubmenu}
                onClick={onItemClick}
              >
                {item.title}
                {hasSubmenu && <ChevronDown className="menu__item-icon" />}
              </ActiveLink>

              {hasSubmenu && (
                <ul className="menu__submenu" role="menu">
                  {submenuItems.map((sub: WPSubMenuItem) => (
                    <li
                      key={sub.title}
                      className="menu__submenu-item"
                      role="menuitem"
                    >
                      <ActiveLink
                        href={sub.slug}
                        className="menu__submenu-link"
                        activeClassName="menu__submenu-link--active"
                        exact={true}
                        onClick={onItemClick}
                      >
                        {sub.title}
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
