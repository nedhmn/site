import type { WorkExperienceType } from '@/lib/work'
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react'

export const WorkExperience = ({ work }: { work: WorkExperienceType }) => {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute top-1 -left-[30px] h-3 w-3 rounded-full bg-gray-400"></div>
      {/* Work Header */}
      <h2 className="mt-8 mb-2 font-semibold text-gray-800 dark:text-zinc-200">
        {work.role}
      </h2>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <a
          className="flex items-center text-blue-500 hover:text-blue-500 dark:text-gray-400 dark:underline dark:decoration-gray-800 dark:underline-offset-2 hover:dark:text-gray-300"
          href={work.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {work.company}
          <ExternalLinkIcon size={14} className="ml-2" />
        </a>
        <div className="mb-1 flex items-center">
          <CalendarIcon size={14} className="mr-2" />
          <span className="leading-snug text-gray-800 dark:text-zinc-300">
            {work.startDate} - {work.endDate}
          </span>
        </div>
      </div>

      {/* Work Description */}
      <p className="my-2 leading-snug text-gray-800 dark:text-zinc-300">
        {work.description}
      </p>

      {/* Work Highlights */}
      <ul className="list-disc space-y-1 pl-5 text-gray-800 dark:text-zinc-300">
        {work.highlights.map((highlight, index) => (
          <li key={index} className="pl-1">
            {/* Description */}
            <p className="leading-snug text-gray-800 dark:text-zinc-300">
              {highlight.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
