import Link from 'next/link'
import Section from '@/layouts/Section'
import { WPPage } from '@/types/wordpress'
import './SectionServices.scss'
import { fetchAPI } from '@/lib/fetchAPI'
import Reveal from '@/components/Reveal'

async function SectionServices() {
  const pages = await fetchAPI<WPPage[]>(
    '/wp/v2/pages/?parent=18&_fields=id,slug,title,acf',
    {
      next: { revalidate: 60 }
    }
  )
  return (
    <Section id="services" className="services" divider={false}>
      <Reveal effect="fade">
        <ul className="services-list">
          {pages.map((page: WPPage) => (
            <li key={page.id} className="services-list__item">
              <Link href={`${page.slug}`} className="services-list__link">
                {page.title.rendered}
                {page.acf?.service_list !== null && (
                  <div
                    className="services-list__inner"
                    dangerouslySetInnerHTML={{
                      __html: page.acf?.service_list
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

export default SectionServices
