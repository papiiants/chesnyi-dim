import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.chesnyi-dim.com.ua',
        port: '',
        pathname: '/**'
      }
    ]
  },

  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src/styles')],

    prependData: `
      @import "@/styles/mixins.scss";
      @import "@/styles/functions.scss";
    `.trim()
  }
}

export default nextConfig
