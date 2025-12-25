import { CONTENT, IMAGES } from '@/constants/content'
import Section from '@/layouts/Section'
import './SectionHero.scss'

type HeroProps = {
  title?: string
  description?: string
  dividerColor?: 'white' | 'bg' | 'primary'
}

export default function Hero({
  title = CONTENT.title,
  description = CONTENT.subtitle,
  dividerColor
}: HeroProps) {
  return (
    <Section
      className="hero"
      id="hero"
      backgroundImage={IMAGES.heroBg}
      overlay={true}
      divider={true}
      dividerColor={dividerColor}
      headingLevel="h1"
      title={title}
      hasHeaderDecoration={true}
      description={description}
    />
  )
}
