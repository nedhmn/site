import { BackPage } from '@/components/back-page'
import { BlogCard } from '@/components/blog-card'
import { BLOGS } from '@/lib/blogs'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <BackPage href="/" content="back home" />
      <h1>Blogs</h1>
      <p>A collection of my blogs.</p>
      <div className="mt-5 flex flex-col gap-6">
        {BLOGS.slice(0, 3).map((blog) => (
          <Link key={blog.title} href={blog.href}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
