import Link from 'next/link'

import './not-found.scss'

export const metadata = {
  title: '404 - Сторінку не знайдено',
  description: 'Сторінку, яку ви шукаєте, не існує або вона була переміщена.',
  robots: 'noindex'
}

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__container">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>

          <p className="not-found__subtitle">Сторінку не знайдено</p>

          <p className="not-found__description">
            Вибачте, але такої сторінки не існує або вона була переміщена.
          </p>

          <div className="not-found__actions">
            <Link href="/" className="not-found__link not-found__link--primary">
              Повернутися на головну
            </Link>

            <Link
              href="/poslugi"
              className="not-found__link not-found__link--secondary"
            >
              Переглянути всі послуги →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
