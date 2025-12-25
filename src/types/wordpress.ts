export interface WPSubMenuItem {
  title: string
  slug: string
  blank?: boolean
}

export interface WPMenuItem {
  title: string
  slug: string
  blank?: boolean
  submenu: false | WPSubMenuItem[]
}

export interface WPPage<T = Record<string, any>> {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  acf?: T
}
