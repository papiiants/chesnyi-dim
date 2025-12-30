import Header from '@/layouts/Header'
import { getMenu } from '@/lib/getMenu'

export default async function HeaderWrapper() {
  const menu = await getMenu()

  return <Header menu={menu} />
}
