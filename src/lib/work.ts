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
      'Led the technical vision and execution for financial technology projects, building and guiding a team to deliver high-quality, scalable solutions.',
    company: 'Predicting Alpha',
    companyUrl: 'https://www.predictingalpha.com/',
    startDate: 'Jan 2025',
    endDate: 'Present',
    location: 'Remote',
    highlights: [
      {
        description:
          'Led and mentored a small team (<5) of frontend and backend developers, conducting PR reviews to ensure high code quality.',
        tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'Docker'],
      },
      {
        description:
          'Led the full hiring and onboarding process to build the dashboard development team.',
      },
      {
        description:
          'Orchestrated the architecture and implementation of a scalable web application (React, FastAPI, MongoDB), implementing CI/CD pipelines with GitHub Actions and Heroku.',
        tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'Docker'],
      },
    ],
  },
  {
    role: 'Software Developer',
    description:
      'Developed and optimized full-stack applications and data pipelines for financial strategies, transforming complex quantitative models into user-friendly software.',
    company: 'Predicting Alpha',
    companyUrl: 'https://www.predictingalpha.com/',
    startDate: 'Sept 2021',
    endDate: 'Jan 2025',
    location: 'Remote',
    highlights: [
      {
        description:
          'Developed the VRP dashboard, translating financial research from [Euan Sinclair](https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=1455183) into a practical strategy. Built a 500GB+ big data pipeline (GCP BigQuery, R, AWS, MongoDB) for backtesting, and integrated it into the main options application (React, Sass, R).',
        images: [
          '/images/work/vrp-dashboard-1.png',
          '/images/work/vrp-dashboard-2.png',
        ],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'GCP', 'MongoDB', 'Docker'],
      },
      {
        description:
          "Developed the Forward Factor dashboard, translating financial research from [Jim Campasano](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3240028) into a practical strategy. Built a full-stack solution (React, Sass, R) and iterated on design with the strategy's author.",
        images: ['/images/work/ts-dashboard.png'],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'MongoDB'],
      },
      {
        description:
          "Automated an infographic's creation and distribution (React, R, AWS, Docker), increasing leads by 5%.",
        images: ['/images/work/earnings-infographic.png'],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'Docker'],
      },
      {
        description:
          'Developed the Overnight Strategy application in collaboration with [InvestorsAlley](https://www.investorsalley.com/), translating financial research into a practical strategy. Developed a data pipeline (R, AWS, MongoDB, Docker), and built a full-stack solution (React, Sass, R).',
        images: [
          '/images/work/overnight-dashboard.png',
          '/images/work/overnight-stats-1.png',
          '/images/work/overnight-stats-2.png',
        ],
        tags: ['React', 'JavaScript', 'R', 'AWS', 'MongoDB', 'Docker'],
      },
      {
        description:
          'Developed a full-stack solution for the Options dashboard, featuring data pipelines (R, AWS, MongoDB, Docker, Grafana), advanced scanners (Tanstack Tables), machine learning tools, and strategy dashboards (React, Sass, R).',
        images: [
          '/images/work/scanner.png',
          '/images/work/earnings-dashboard.png',
          '/images/work/homepage.png',
          '/images/work/strategy-masterclass.png',
        ],
        tags: [
          'React',
          'JavaScript',
          'R',
          'AWS',
          'MongoDB',
          'Docker',
          'Grafana',
        ],
      },
    ],
  },
]
