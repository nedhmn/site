import { FileTextIcon } from "lucide-react";

export const WorkHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 ">
      <div>
        <h1 className="mb-3 font-medium">Work Experience</h1>
        <p className="leading-snug text-gray-800 dark:text-zinc-300">
          My professional journey and roles.
        </p>
      </div>
      <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors dark:bg-zinc-700 dark:text-zinc-300 hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-zinc-600 dark:hover:text-zinc-100"
      >
        <FileTextIcon size={18} />
        Download Resume
      </a>
    </div>
  );
};
