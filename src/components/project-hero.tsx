import { ProjectType } from '@/lib/projects'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export const ProjectHero = ({ project }: { project: ProjectType }) => {
  return (
    <>
      {/* Project Header */}
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      {/* Project Image */}
      <div className="mt-2 flex items-center overflow-hidden rounded-lg border border-gray-800">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          height={1000}
          width={1000}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Project Links */}
      <div className="mt-2 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <SiGithub size={18} />
            view on github
          </a>
        )}
        {project.docs && (
          <a
            href={project.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <ExternalLink size={18} />
            visit docs
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <ExternalLink size={18} />
            visit website
          </a>
        )}
      </div>
    </>
  )
}
