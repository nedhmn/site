import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      {/* About Me */}
      <section>
        <p className="leading-snug text-gray-800 dark:text-zinc-300">
          {`I'm a full-stack software developer with over four years of experience, 
        primarily in agile startups and smaller companies.`}
        </p>
        <p className="mt-3 leading-snug text-gray-800 dark:text-zinc-300">
          {`My early startup roles
        allowed me to wear many hats in fast-paced environments, leveraging great 
        mentors across full-stack web development, data engineering, and team
        leadership.`}
        </p>
      </section>

      {/* Recent Projects */}
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2>Recent Projects</h2>{" "}
          <Link
            href="/projects"
            className="flex items-center gap-1 text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500"
          >
            view all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <Link key={project.title} href={project.href}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
