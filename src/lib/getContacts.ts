import { fetchAPI } from '@/lib/fetchAPI'
import { WPPage } from '@/types/wordpress'

export interface ContactsACF {
  phone: string
  email: string
  address: string
  instagram_url?: string
}

export async function getContactsData(): Promise<ContactsACF> {
  try {
    const pages = await fetchAPI<WPPage<ContactsACF>[]>(
      `/wp/v2/pages?slug=kontakti`,
      {
        next: { revalidate: 60 }
      }
    )

    return (
      pages?.[0]?.acf || {
        phone: '',
        email: '',
        address: '',
        instagram_url: undefined
      }
    )
  } catch (err) {
    console.warn('[getContactsData] Не удалось загрузить контакты:', err)
    return {
      phone: '',
      email: '',
      address: '',
      instagram_url: undefined
    }
  }
}
