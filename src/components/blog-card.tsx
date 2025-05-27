import type { BlogType } from '@/lib/blogs'
import { CalendarIcon } from 'lucide-react'

export const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-400 dark:border-zinc-800 dark:hover:border-zinc-600">
      <div className="flex flex-row items-center gap-1 text-sm text-primary-foreground">
        <CalendarIcon size={14} />
        {blog.date}
      </div>
      <h3 className="my-2 text-foreground">{blog.title}</h3>
      <p className="mb-5 text-sm">{blog.description}</p>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
