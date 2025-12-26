export async function fetchAPI<T>(
  endpoint: string,
  options: { next?: { revalidate: number } } = {}
): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`

  try {
    console.log(`[API Fetch] → ${url}`)

    const res = await fetch(url, {
      ...options,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; Next.js/Vercel-Build; +https://chesnyi-dim.com.ua)'
      },
      next: { revalidate: 60 }
    })

    if (!res.ok) {
      console.warn(`[API] ${res.status} - ${res.statusText} → ${url}`)
      return [] as unknown as T
    }

    const data = await res.json()
    return data as T
  } catch (error) {
    console.error(`[SAFE] Fetch failed ${url}:`, error)
    return [] as unknown as T
  }
}
