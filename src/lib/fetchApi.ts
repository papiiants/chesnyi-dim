const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL

export async function fetchAPI<T>(
  endpoint: string,
  p0: { next: { revalidate: number } }
): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`)
  }

  const data = await res.json()
  return data as T
}
