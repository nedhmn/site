import type { ProjectType } from '@/lib/projects'
import Image from 'next/image'

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-colors hover:border-gray-400 sm:flex-row dark:border-zinc-800 dark:hover:border-zinc-600">
      <div className="relative h-35 bg-gray-100 sm:w-1/3 dark:bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={1000}
          className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100"
        />
      </div>
      <div className="flex flex-col justify-between p-4 sm:w-2/3">
        <h3 className="mb-2 font-medium text-gray-800 dark:text-zinc-200">
          {project.title}
        </h3>
        <p className="mb-3 text-sm leading-snug text-gray-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
