'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PAGES = [
  { name: 'Ned Hermann', path: '/' },
  { name: 'work', path: '/work' },
  { name: 'projects', path: '/projects' },
]

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className="my-10 flex w-full max-w-[60ch] flex-row items-center">
      <Link
        key={PAGES[0].name}
        href={PAGES[0].path}
        className="text-black dark:text-white"
      >
        {PAGES[0].name}
      </Link>
      <div className="flex-1" />
      <div className="flex flex-row space-x-4">
        {PAGES.slice(1).map((page) => (
          <Link
            key={page.name}
            href={page.path}
            className={`${pathname.startsWith(page.path) ? 'text-blue-500' : ''}`}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </header>
  )
}
