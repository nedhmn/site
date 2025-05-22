import { ProjectType } from '@/lib/projects'

export const ProjectTags = ({ project }: { project: ProjectType }) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span key={tag} className="rounded-full bg-gray-800 px-3 py-1 text-sm">
          {tag}
        </span>
      ))}
    </div>
  )
}
