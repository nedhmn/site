export type ProjectType = {
  title: string
  description: string
  href: string
  image: string
  github: string
  docs?: string
  link?: string
  tags: string[]
}

export const PROJECTS: ProjectType[] = [
  {
    title: 'Yu-Gi-Oh! AI Chatbot',
    description: 'AI RAG chatbot for Yu-Gi-Oh! Goat Format rulings.',
    href: '/projects/ygo-ruling-ai-chatbot',
    image: '/images/projects/ygo-ai-chatbot.png',
    github: 'https://github.com/nedhmn/ygo-ruling-ai-chatbot',
    docs: 'https://nedhmn.github.io/ygo-ruling-ai-chatbot/',
    tags: ['TypeScript', 'Next.js', 'AI RAG', 'OpenAI', 'Pinecone'],
  },
  {
    title: 'Yu-Gi-Oh! Discord Bot',
    description: 'Discord bot for Yu-Gi-Oh! event submissions.',
    href: '/projects/ygo-war-league-discord-bot',
    image: '/images/projects/ygo-war-league-discord-bot.png',
    github: 'https://github.com/nedhmn/ygo-war-league-discord-bot',
    docs: 'https://nedhmn.github.io/ygo-war-league-discord-bot/',
    tags: ['Python', 'discord.py', 'PIL', 'SQL'],
  },
  {
    title: 'StreetEasy Scraper',
    description:
      'Advanced web scraper using BrightData, webhooks, and secure tunnels.',
    href: '/projects/streeteasy-scraper',
    image: '/images/projects/streeteasy-scraper.png',
    github: 'https://github.com/nedhmn/streeteasy-scraper',
    docs: 'https://nedhmn.github.io/streeteasy-scraper/',
    tags: ['Python', 'FastAPI', 'BrightData', 'Cloudflare', 'SQL'],
  },
  {
    title: 'Yu-Gi-Oh! Card Image Hosting',
    description:
      'Download, archive, and host Yu-Gi-Oh! card images using AWS S3 and CloudFront.',
    href: '/projects/ygo-card-image-hosting',
    image: '/images/projects/ygo-card-image-hosting.png',
    github: 'https://github.com/nedhmn/ygo-card-image-hosting',
    docs: 'https://nedhmn.github.io/ygo-card-image-hosting/',
    tags: ['Python', 'Terraform', 'AWS', 'SQL'],
  },
  {
    title: 'site',
    description: 'My personal website built with Next.js and MDX.',
    href: '/projects/site',
    image: '/images/projects/site.png',
    github: 'https://github.com/nedhmn/site',
    tags: ['TypeScript', 'Next.js', 'MDX', 'Vercel'],
  },
  {
    title: 'ygeometric',
    description:
      'A hypergeometric probability calculator for Yu-Gi-Oh! deck optimization. Successor to yugioh.party.',
    href: '/projects/ygeometric',
    image: '/images/projects/ygeometric.png',
    github: 'https://github.com/nedhmn/ygeometric',
    link: 'https://www.ygeometric.com/',
    tags: ['TypeScript', 'Next.js', 'Vercel'],
  },
  {
    title: 'Yu-Gi-Oh! War League Analytics',
    description:
      'Data pipelines to collect, process, and analyze Goat Format War League (GFWL) data.',
    href: '/projects/gfwl-analytics',
    image: '/images/projects/gfwl-analytics.png',
    github: 'https://github.com/nedhmn/gfwl-analytics',
    tags: ['Python', 'Pandas', 'Polars', 'SQL', 'AWS'],
  },
]
