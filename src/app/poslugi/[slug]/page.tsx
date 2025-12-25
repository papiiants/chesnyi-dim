import getPage from '@/lib/getPage'
import { notFound } from 'next/navigation'
import SectionHero from '@/sections/SectionHero'
import Reveal from '@/components/Reveal'
import Section from '@/layouts/Section'
import SectionCallback from '@/sections/SectionCallback'
interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  const page = await getPage(slug)

  if (!page) {
    return notFound()
  }

  return {
    title: page.acf?.seo_title || page.title.rendered || '',
    description: page.acf?.seo_description || ''
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const page = await getPage(slug)

  if (!page) {
    notFound()
  }

  return (
    <>
      <SectionHero
        title={page.title.rendered.replace(/<[^>]*>/g, '')}
        description={page.acf?.seo_description || ''}
        dividerColor="bg"
      />
      <Section
        id="content"
        className="section-content"
        backgroundColor="#ebebeb"
        divider={false}
      >
        <Reveal effect="fade">
          <div className="container">
            <div
              className="section-content__inner"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          </div>
        </Reveal>
      </Section>
      <SectionCallback />
    </>
  )
}
