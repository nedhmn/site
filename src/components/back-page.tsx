import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BackPageProps {
  href: string
  content: string
}

export const BackPage = ({ href, content }: BackPageProps) => {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Link
        href={href}
        className="flex items-center gap-1 text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500"
      >
        <ArrowLeft size={16} /> {content}
      </Link>
    </div>
  )
}
