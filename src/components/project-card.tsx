import React from "react";
import type { ProjectType } from "@/lib/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="h-full border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors dark:border-zinc-800 dark:hover:border-zinc-600">
      <div className="h-48 bg-gray-100 relative dark:bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2 text-gray-800 dark:text-zinc-200">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-700 dark:bg-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
