import './not-found.scss'
import Section from '@/layouts/Section'
import SectionCallback from '@/sections/SectionCallback'
import { CONTENT } from '@/constants/content'
import Button from '@/components/Button'

export const metadata = {
  title: '404 - Сторінку не знайдено',
  description: 'Сторінку, яку ви шукаєте, не існує або вона була переміщена.',
  robots: 'noindex'
}

export default function NotFound() {
  return (
    <>
      <Section
        id="not-found"
        className="not-found"
        title="404"
        headingLevel="h1"
        description={CONTENT.notFound}
        divider={false}
        backgroundColor="#ebebeb"
      >
        <Button href="/">{CONTENT.backToHomepage}</Button>
      </Section>
      <SectionCallback />
    </>
  )
}
