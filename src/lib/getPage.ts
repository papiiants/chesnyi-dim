import { fetchAPI } from '@/lib/fetchAPI'
import { WPPage } from '@/types/wordpress'

export default async function getPage(slug: string): Promise<WPPage | null> {
  if (!slug) return null

  try {
    const data = await fetchAPI<WPPage[]>(
      `/wp/v2/pages?slug=${slug}&_fields=id,slug,title,content,acf,parent&_embed`,
      { next: { revalidate: 60 } }
    )

    return data?.[0] ?? null
  } catch (err: any) {
    console.error(`✗ Ошибка загрузки страницы "${slug}":`, err.message)
    if (err.cause) console.error('Причина:', err.cause)
    return null // ← это спасает сборку!
  }
}
