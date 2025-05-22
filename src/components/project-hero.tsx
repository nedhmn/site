import { ProjectType } from "@/lib/projects";
import Image from "next/image";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";

export const ProjectHero = ({ project }: { project: ProjectType }) => {
  return (
    <>
      {/* Project Header */}
      <div>
        <h1 className="mt-8 mb-3 font-medium">{project.title}</h1>
        <p className="leading-snug text-gray-800 dark:text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Project Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-800 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Image */}
      <div className="mt-2 flex items-center rounded-lg overflow-hidden border border-gray-800">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          height={1000}
          width={1000}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Project Links */}
      <div className="flex gap-4 mt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm gap-2 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          >
            <SiGithub size={18} />
            view on github
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm gap-2 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          >
            <ExternalLink size={18} />
            visit docs
          </a>
        )}
      </div>
    </>
  );
};
