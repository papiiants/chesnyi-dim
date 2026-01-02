import { fetchAPI } from '@/lib/fetchAPI'
import { WPMenuItem } from '@/types/wordpress'

export async function getMenu(): Promise<WPMenuItem[]> {
  try {
    const data = await fetchAPI<any>('/custom/v1/main-menu', {
      next: { revalidate: 60 }
    })

    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('[getMenu] Ошибка:', error)
    return []
  }
}
