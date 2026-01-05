# Headless WordPress + Next.js Website

Modern implementation of a website using **WordPress as headless CMS** + **Next.js 14+ (App Router)** + **TypeScript**

## Website

https://chesnyi-dim.com.ua/

## Main Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- WordPress (as headless CMS)
- WP REST API + ACF
- SCSS (7-1 pattern inspired)
- React Server Components + Server Actions

## Quick Start

```bash
# 1. Clone the project
gh repo clone papiiants/chesnyi-dim

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Create .env.local and fill the variables
cp .env.local.example .env.local

# Most important variables:
WORDPRESS_API_URL=https://backend.chesnyi-dim.com.ua/wp-json

# 4. Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
