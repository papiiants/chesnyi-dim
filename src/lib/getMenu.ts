import { fetchAPI } from '@/lib/fetchAPI'
import { WPMenuItem } from '@/types/wordpress'

export async function getMenu(): Promise<WPMenuItem[]> {
  const data = await fetchAPI<{ main_menu: WPMenuItem[] }>(
    `/acf/v3/options/options/main_menu`,
    {
      next: { revalidate: 60 }
    }
  )

  return data.main_menu
}
