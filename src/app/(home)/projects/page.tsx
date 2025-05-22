import { BackPage } from '@/components/back-page'
import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/lib/projects'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <BackPage href="/" content="back home" />

      {/* Header */}
      <h1 className="mt-8 mb-3 font-medium">Projects</h1>
      <p className="mt-5 leading-snug text-gray-800 dark:text-zinc-300">
        A collection of my open-source projects.
      </p>

      {/* Projects */}
      <div className="mt-5 flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <Link key={project.title} href={project.href}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
