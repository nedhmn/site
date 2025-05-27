import type { BlogType } from '@/lib/blogs'
import { BackPage } from './back-page'

interface BlogHeaderProps {
  blog: BlogType
}

export const BlogHeader = ({ blog }: BlogHeaderProps) => {
  return (
    <div>
      <BackPage href="/blogs" content="back to blogs" />
      <h1>{blog.title}</h1>

      {/* Tags */}
      <div className="my-4 flex flex-wrap gap-2">
        {blog.tags &&
          blog.tags.map((tag, index) => (
            <div
              key={index}
              className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-white"
            >
              {tag}
            </div>
          ))}
      </div>

      {/* Description */}
      <p className="my-8">{blog.description}</p>
    </div>
  )
}
