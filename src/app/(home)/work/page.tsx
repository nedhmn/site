import { BackPage } from "@/components/back-page";
import { WorkHeader } from "@/components/work-header";
import { WORK_EXPERIENCE } from "@/lib/work";
import { WorkExperience } from "@/components/work-experience";

const Page = () => {
  return (
    <div>
      <BackPage href="/" content="back home" />
      <WorkHeader />
      <div className="border-l pl-6 border-gray-800 dark:border-zinc-300">
        {WORK_EXPERIENCE.map((work, index) => {
          return <WorkExperience key={index} work={work} />;
        })}
      </div>
    </div>
  );
};

export default Page;
