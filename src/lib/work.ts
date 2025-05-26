interface WorkHighlightType {
  description: string
  images?: string[]
  tags?: string[]
}

export interface WorkExperienceType {
  role: string
  description: string
  company: string
  companyUrl: string
  startDate: string
  endDate: string
  location: string
  highlights: WorkHighlightType[]
}

export const WORK_EXPERIENCE: WorkExperienceType[] = [
  {
    role: 'Tech Lead',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor massa quis rhoncus pretium. Integer semper ligula at eros ullamcorper,',
    company: 'Predicting Alpha',
    companyUrl: 'https://www.predictingalpha.com/',
    startDate: 'Jan 2025',
    endDate: 'Present',
    location: 'Remote',
    highlights: [
      {
        description:
          'Led and mentored a small team (<5) of frontend and backend developers, conducting PR reviews to ensure high code quality.',
        images: [],
        tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'Docker'],
      },
      {
        description:
          'Led the full hiring and onboarding process to build the dashboard development team.',
      },
      {
        description:
          'Architected a scalable microservices stack (React, FastAPI, MongoDB), implementing CI/CD with GitHub Actions and Heroku.',
        images: [],
        tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'Docker'],
      },
    ],
  },
  {
    role: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor massa quis rhoncus pretium. Integer semper ligula at eros ullamcorper,',
    company: 'Predicting Alpha',
    companyUrl: 'https://www.predictingalpha.com/',
    startDate: 'Sept 2021',
    endDate: 'Jan 2025',
    location: 'Remote',
    highlights: [
      {
        description:
          'Developed the VRP dashboard by replicating a financial strategy from Euan Sinclair, building a 500GB+ big data pipeline (GCP BigQuery, R, AWS, MongoDB) for backtesting, and integrating it into the main options application (React, Sass, R).',
        images: [],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'GCP', 'MongoDB', 'Docker'],
      },
      {
        description:
          "Developed the Forward Factor dashboard, replicating a financial strategy, building a full-stack solution (React, Sass, R), and iterating on design with the strategy's author, Jim Compassano.",
        images: [],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'MongoDB'],
      },
      {
        description:
          "Automated an infographic's creation and distribution (React, R, AWS, Docker), increasing leads by 5%.",
        images: [],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'Docker'],
      },
      {
        description:
          'Developed the Overnight Strategy application in collaboration with InvestorsAlley, replicating a financial strategy, developing a data pipeline (AWS EC2, R, MongoDB, Docker), and implementing a full-stack solution (React, Sass, R) with consultation from Euan Sinclair.',
        images: [],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'MongoDB', 'Docker'],
      },
      {
        description:
          'Developed a full-stack solution for the Options dashboard, featuring advanced scanners (Tanstack Tables), machine learning tools, and strategy dashboards (JavaScript, Sass, R, AWS, MongoDB).',
        images: [],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'MongoDB', 'Docker'],
      },
    ],
  },
]
