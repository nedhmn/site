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
    role: 'Senior Software Engineer',
    description:
      'Led full-stack development and team management to deliver performant web applications and robust software solutions.',
    company: 'Predicting Alpha',
    companyUrl: 'https://www.predictingalpha.com/',
    startDate: 'Jan 2025',
    endDate: 'Present',
    location: 'Remote',
    highlights: [
      {
        description:
          'Recruited, onboarded, and managed a team (<5) of frontend and backend developers to deliver full-stack solutions.',
      },
      {
        description:
          'Led frontend team to develop a React application for dashboards and ML tools, optimizing performance with router-based fetch patterns and render profiling, and integrating user analytics.',
      },
      {
        description:
          'Developed RESTful HTTP API in Python using FastAPI, integrating user analytics, error monitoring, secure JWT authentication, Redis caching, and rate limiting.',
      },
      {
        description:
          'Created GitHub CI/CD pipelines for Docker images, automating linting, E2E frontend tests with Cypress, backend unit tests with Pytest, builds, and deployments across staging environments.',
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
          'Architected and developed a full-stack, scalable financial data platform using React and an R API, featuring AWS data pipelines, charts, tables, ML tools, and CRUD services across 1,000+ users. ',
        images: [
          '/images/work/earnings-dashboard.png',
          '/images/work/vrp-dashboard-1.png',
          '/images/work/ts-dashboard.png',
          '/images/work/homepage.png',
        ],
      },
      {
        description:
          'Developed a scanner using Tanstack Tables, processing over 200 columns and thousands of rows with custom settings, metrics, call-to-actions, and CRUD services.',
        images: ['/images/work/scanner-1.png', '/images/work/scanner-2.png'],
      },
      {
        description:
          'Engineered a big data pipeline with GCP BigQuery, processing over 500GB of data for strategy backtests via SQL scripts, delivered via API and consumed by a React frontend.',
        images: ['/images/work/vrp-dashboard-2.png'],
      },
      {
        description:
          'Centralized logging across 10+ data pipelines, aggregating 100,000+ logs and establishing dashboards and an alert system with Grafana, Loki, and Promtail.',
        images: ['/images/work/grafana-logs.png'],
      },
      {
        description:
          'Automated infographic creation and distribution using React, R, AWS, and Docker, increasing leads by 5% and user engagement by 10%.',
        images: ['/images/work/earnings-infographic.png'],
      },
      {
        description:
          'Developed an end-to-end internal company dashboard system, leveraging React for the frontend, an R API, and an R data pipeline deployed on AWS with Docker, to provide trend and live KPI insights from 50,000+ user events.',
        images: [],
      },
    ],
  },
]
