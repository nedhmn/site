import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BackPageProps {
  href: string
  content: string
}

export const BackPage = ({ href, content }: BackPageProps) => {
  return (
    <div className="flex items-center gap-2">
      <Link href={href} className="flex items-center gap-1">
        <ArrowLeft size={16} /> {content}
      </Link>
    </div>
  )
}
