import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import { BackPage } from "@/components/back-page";

const Page = () => {
  return (
    <div>
      <BackPage href="/" content="back home" />

      {/* Header */}
      <h1 className="font-medium mt-8 mb-3">Projects</h1>
      <p className="text-gray-800 dark:text-zinc-300 mt-5 leading-snug">
        A collection of my open-source projects.
      </p>

      {/* Projects */}
      <div className="mt-5 flex flex-col gap-6">
        {PROJECTS.slice(0, 3).map((project) => (
          <Link key={project.title} href={project.href}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
