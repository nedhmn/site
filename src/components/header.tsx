import Link from 'next/link'

const PAGES = [
  { name: 'Ned Hermann', path: '/' },
  { name: 'blogs', path: '/blogs' },
  { name: 'projects', path: '/projects' },
]

export const Header = () => {
  return (
    <div className="my-10 flex w-[60ch] flex-row justify-between">
      <div>
        <Link
          key={PAGES[0].name}
          href={PAGES[0].path}
          className="font-semibold text-black transition-colors duration-200 hover:text-blue-500 dark:text-white"
        >
          {PAGES[0].name}
        </Link>
      </div>
      <div className="flex flex-row space-x-4">
        {PAGES.slice(1).map((page) => (
          <Link
            key={page.name}
            href={page.path}
            className="text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
