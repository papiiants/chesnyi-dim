'use client'

import './Menu.scss'
import { WPMenuItem } from '@/types/wordpress'
import ActiveLink from '@/components/ActiveLink'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

interface MenuProps {
  menu: WPMenuItem[]
  isOpen?: boolean
  className?: string
  onItemClick?: () => void
}

export default function Menu({
  menu = [],
  isOpen = false,
  className,
  onItemClick
}: MenuProps) {
  if (menu.length === 0) {
    return null
  }

  return (
    <nav
      className={clsx('menu', className, isOpen && 'menu--open')}
      aria-hidden={!isOpen}
    >
      <ul className="menu__list" role="menu">
        {menu.map((item) => {
          const hasSubmenu = !!item.submenu?.length

          return (
            <li
              key={item.slug}
              className={clsx(
                'menu__item',
                hasSubmenu && 'menu__item--has-submenu'
              )}
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
                  {item.submenu!.map((sub) => (
                    <li
                      key={sub.slug}
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
