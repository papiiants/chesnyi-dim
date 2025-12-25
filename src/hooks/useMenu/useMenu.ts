import { useState, useEffect } from 'react'
import { getMenu } from '@/lib/getMenu'
import { WPMenuItem } from '@/types/wordpress'

interface UseMenuReturn {
  menu: WPMenuItem[]
  loading: boolean
  error: boolean
  refetch: () => Promise<void>
}

export default function useMenu(): UseMenuReturn {
  const [menu, setMenu] = useState<WPMenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchMenu = async () => {
    try {
      setLoading(true)
      setError(false)
      const data = await getMenu()
      setMenu(data)
    } catch (err) {
      console.error('Ошибка загрузки меню:', err)
      setError(true)
      setMenu([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMenu()
  }, [])

  return {
    menu,
    loading,
    error,
    refetch: fetchMenu
  }
}
