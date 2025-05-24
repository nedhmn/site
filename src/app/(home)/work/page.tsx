import { BackPage } from "@/components/back-page";
import { WorkHeader } from "@/components/work-header";

const Page = () => {
  return (
    <div>
      <BackPage href="/" content="back home" />
      <WorkHeader />
    </div>
  );
};

export default Page;
