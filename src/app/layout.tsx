import '@/styles/index.scss'
import { Montserrat } from 'next/font/google'
import Footer from '@/layouts/Footer'
import Toolbar from '@/layouts/Toolbar'
import React from 'react'
import HeaderWrapper from '@/components/HeaderWrapper'

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" data-scroll-behavior="smooth">
      <body className={montserrat.className}>
        <Toolbar />
        <HeaderWrapper />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
