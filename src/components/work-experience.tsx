import type { WorkExperienceType } from "@/lib/work";
import { CalendarIcon, ExternalLinkIcon } from "lucide-react";

export const WorkExperience = ({ work }: { work: WorkExperienceType }) => {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[30px] top-1"></div>
      {/* Work Header */}
      <h2 className="font-semibold mt-8 mb-2 text-gray-800 dark:text-zinc-200">
        {work.role}
      </h2>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <a
          className="text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800 flex items-center"
          href={work.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {work.company}
          <ExternalLinkIcon size={14} className="ml-2" />
        </a>
        <div className="flex items-center mb-1">
          <CalendarIcon size={14} className="mr-2" />
          <span className="leading-snug text-gray-800 dark:text-zinc-300">
            {work.startDate} - {work.endDate}
          </span>
        </div>
      </div>

      {/* Work Description */}
      <p className="leading-snug text-gray-800 dark:text-zinc-300 my-2">
        {work.description}
      </p>

      {/* Work Highlights */}
      <ul className="list-disc space-y-1 pl-5 text-gray-800 dark:text-zinc-300">
        {work.highlights.map((highlight, index) => (
          // Highlight Description
          <li key={index} className="pl-1">
            <p className="leading-snug text-gray-800 dark:text-zinc-300">
              {highlight.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
