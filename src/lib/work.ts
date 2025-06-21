type WorkHighlightType = {
  description: string
  images?: string[]
  tags?: string[]
}

export type WorkExperienceType = {
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
    role: 'Senior Software Engineer',
    description:
      'Led architectural migrations, backend API development, and team direction to ship modern, high-performance web applications.',
    company: 'Predicting Alpha',
    companyUrl: 'https://www.predictingalpha.com/',
    startDate: 'Jan 2025',
    endDate: 'Present',
    location: 'Remote',
    highlights: [
      {
        description:
          'Led the architectural migration of the core platform to a decoupled, TypeScript-based React SPA, replacing a server-driven UI to build more complex and maintainable features',
      },
      {
        description:
          'Architected and delivered a new backend API using Python and FastAPI to support a new suite of on-demand machine learning tools and user management features',
      },
      {
        description:
          'Recruited, onboarded, and directed a full-stack team of up to 4 engineers, owning feature development from conception to deployment',
      },
      {
        description:
          'Established a new CI/CD pipeline with GitHub Actions to support the containerized Python and React services, automating all build, test, and deployment processes',
      },
    ],
  },
  {
    role: 'Software Engineer',
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
          'Architected a full-stack options analytics platform on AWS for over 1,000 users, featuring a reactive WebSocket API and a server-driven SPA frontend that utilized React libraries for dynamic UI components',
        images: [
          '/images/work/earnings-dashboard.png',
          '/images/work/vrp-dashboard-1.png',
          '/images/work/ts-dashboard.png',
          '/images/work/homepage.png',
        ],
      },
      {
        description:
          'Engineered over 20 interactive financial charts with Highcharter to visualize complex options data, transforming raw data tables into actionable visual insights',
        images: ['/images/work/vrp-backtest-chart.png'],
      },
      {
        description:
          'Engineered a high-performance data scanner capable of rendering and filtering thousands of rows across 200+ columns in under one second, enhancing user data analysis capabilities',
        images: ['/images/work/scanner-1.png', '/images/work/scanner-2.png'],
      },
      {
        description:
          'Analyzed user behavior with Heap analytics to identify and resolve friction points in key workflows, leading to a redesigned UI that increased feature adoption by 20%',
      },
      {
        description:
          'Increased marketing leads by 5% and user engagement by 10% by developing an automated infographic generation and distribution service using React and AWS',
        images: ['/images/work/earnings-infographic.png'],
      },
      {
        description:
          'Developed an end-to-end internal analytics dashboard, unifying data from disparate SaaS sources to establish a single source of truth for accurate business KPIs',
      },
      {
        description:
          'Developed over 10 batch ETL data pipelines using AWS services to populate a MongoDB database, providing the core data for the options analytics platform',
        images: ['/images/work/grafana-logs.png'],
      },
      {
        description:
          'Engineered a specialized data pipeline with GCP BigQuery, writing complex SQL transformations to process over 500GB of historical financial data for algorithmic strategy backtesting',
        images: ['/images/work/vrp-dashboard-2.png'],
      },
      {
        description:
          'Centralized over 100,000 logs from 10+ AWS data pipelines into a Grafana and Loki stack, reducing daily monitoring time from over 30 minutes to minutes',
        images: ['/images/work/grafana-logs.png'],
      },
    ],
  },
]
