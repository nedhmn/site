import { BackPage } from '@/components/back-page'
import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/lib/projects'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="flex flex-col">
      <BackPage href="/" content="back home" />

      {/* Header */}
      <h1>Projects</h1>
      <p>A collection of my open-source projects.</p>

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
