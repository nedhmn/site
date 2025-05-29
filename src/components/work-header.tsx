import { ExternalLinkIcon } from 'lucide-react'

export const WorkHeader = () => {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="mt-0">Work Experience</h1>
        <p>My professional journey and roles.</p>
      </div>
      <a
        href="https://drive.google.com/file/d/15HFapdte8FlC0sEhNNVldETOxmWEOBe3/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-300 hover:text-gray-900 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-zinc-100"
      >
        <ExternalLinkIcon size={18} />
        Resume
      </a>
    </div>
  )
}
