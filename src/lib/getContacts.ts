import { fetchAPI } from '@/lib/fetchAPI'
import { WPPage } from '@/types/wordpress'

export interface ContactsACF {
  phone: string
  email: string
  address: string
  instagram_url?: string
}

export default async function getContacts(): Promise<ContactsACF> {
  const pages = await fetchAPI<WPPage<ContactsACF>[]>(
    `/wp/v2/pages?slug=kontakti`
  )

  const acfData = pages?.[0]?.acf

  return (
    acfData || {
      phone: '',
      email: '',
      address: '',
      instagram_url: undefined
    }
  )
}
