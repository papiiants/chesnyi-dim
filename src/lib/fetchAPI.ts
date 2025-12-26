const BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_WORDPRESS_URL не задан в переменных окружения!')
}

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`

  console.log('→ API request:', url) // ← очень полезно для логов

  const res = await fetch(url, {
    ...options,
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    console.error(`API error ${res.status} on ${url}`)
    throw new Error(
      `Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`
    )
  }

  return res.json() as Promise<T>
}
