import SectionHero from '@/sections/SectionHero'
import SectionServices from '@/sections/SectionServices'
import SectionCallback from '@/sections/SectionCallback'
import type { Metadata } from 'next'
import { CONTENT } from '@/constants/content'

export const metadata: Metadata = {
  title: CONTENT.title,
  description: CONTENT.subtitle
}

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionServices />
      <SectionCallback />
    </>
  )
}
