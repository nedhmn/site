import React from "react";
import { ProjectType } from "@/lib/projects";

export const ProjectTags = ({ project }: { project: ProjectType }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {project.tags.map((tag) => (
        <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
          {tag}
        </span>
      ))}
    </div>
  );
};
