import { BackPage } from '@/components/back-page'
import { WorkExperience } from '@/components/work-experience'
import { WorkHeader } from '@/components/work-header'
import { WORK_EXPERIENCE } from '@/lib/work'

const Page = () => {
  return (
    <div>
      <BackPage href="/" content="back home" />
      <WorkHeader />
      <div className="border-l border-gray-400 pl-6">
        {WORK_EXPERIENCE.map((work, index) => {
          return <WorkExperience key={index} work={work} />
        })}
      </div>
    </div>
  )
}

export default Page
