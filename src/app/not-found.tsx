// app/not-found.tsx
export const metadata = {
  title: '404 — Страница не найдена',
  description: 'К сожалению, такой страницы не существует'
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center bg-gray-50">
      <h1 className="text-8xl md:text-9xl font-bold text-gray-800 mb-4">404</h1>

      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-700">
        Страница не найдена
      </h2>

      <p className="text-xl text-gray-600 mb-10 max-w-lg">
        К сожалению, запрашиваемая страница не существует или была перемещена.
      </p>

      <a
        href="/"
        className="
          inline-flex items-center px-8 py-4
          bg-blue-600 hover:bg-blue-700
          text-white font-medium rounded-lg
          transition-colors duration-200
          text-lg shadow-md hover:shadow-lg
        "
      >
        Вернуться на главную
      </a>
    </div>
  )
}
