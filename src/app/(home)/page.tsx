import { BlogCard } from '@/components/blog-card'
import { ProjectCard } from '@/components/project-card'
import { BLOGS } from '@/lib/blogs'
import { PROJECTS } from '@/lib/projects'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      {/* About Me */}
      <section>
        <p>
          {`I'm a full-stack software developer with over four years of experience
           in agile startups.`}
        </p>
        <p className="mt-3">
          {`My early startup experience allowed me to wear many hats in fast-paced 
          environments, leveraging great mentors across full-stack web development and data engineering.`}
        </p>
      </section>

      {/* Recent Projects */}
      <section>
        <div className="mt-8 mb-3 flex items-center justify-between">
          <h2 className="m-0">Recent Projects</h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 transition-colors duration-200"
          >
            view all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <Link key={project.title} href={project.href}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="mt-10">
        <div className="mt-8 mb-3 flex items-center justify-between">
          <h2 className="m-0">Recent Blogs</h2>
          <Link
            href="/blogs"
            className="flex items-center gap-1 transition-colors duration-200"
          >
            view all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-6">
          {BLOGS.slice(0, 3).map((blog) => (
            <Link key={blog.title} href={blog.href}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Page
