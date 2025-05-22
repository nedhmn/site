export const PROJECTS = [
  {
    title: "Yu-Gi-Oh! AI Chatbot",
    description: "AI RAG chatbot for Yu-Gi-Oh! Goat Format rulings.",
    href: "/projects/ygo-ruling-ai-chatbot",
    image: "/ygo-ai-chatbot.png",
    github: "https://github.com/nedhmn/ygo-ruling-ai-chatbot",
    docs: "https://nedhmn.github.io/ygo-ruling-ai-chatbot/",
    tags: ["Typescript", "Next.js", "AI RAG", "OpenAI", "Pinecone"],
  },
  {
    title: "Yu-Gi-Oh! Discord Bot",
    description: "Discord bot for Yu-Gi-Oh! event submissions.",
    href: "/projects/ygo-war-league-discord-bot",
    image: "/ygo-war-league-discord-bot.png",
    github: "https://github.com/nedhmn/ygo-war-league-discord-bot",
    docs: "https://nedhmn.github.io/ygo-war-league-discord-bot/",
    tags: ["Python", "discord.py", "PIL", "SQL"],
  },
  {
    title: "StreetEasy Scraper",
    description:
      "Advanced web scraper using BrightData, webhooks, and secure tunnels.",
    href: "/projects/streeteasy-scraper",
    image: "/streeteasy-scraper.png",
    github: "https://github.com/nedhmn/streeteasy-scraper",
    docs: "https://nedhmn.github.io/streeteasy-scraper/",
    tags: ["Python", "FastAPI", "BrightData", "Cloudflare", "SQL"],
  },
  {
    title: "Yu-Gi-Oh! Card Image Hosting",
    description:
      "Download, archive, and host Yu-Gi-Oh! card images using AWS S3 and CloudFront.",
    href: "/projects/ygo-card-image-hosting",
    image: "/ygo-card-image-hosting.png",
    github: "https://github.com/nedhmn/ygo-card-image-hosting",
    docs: "https://nedhmn.github.io/ygo-card-image-hosting/",
    tags: ["Python", "Terraform", "AWS", "SQL"],
  },
  {
    title: "ygeometric",
    description:
      "A hypergeometric probability calculator for Yu-Gi-Oh! deck optimization. Successor to yugioh.party.",
    href: "/projects/ygeometric",
    image: "/ygeometric.png",
    github: "https://github.com/nedhmn/ygeometric",
    link: "https://www.ygeometric.com/",
    tags: ["Typescript", "Next.js", "Vercel"],
  },
  {
    title: "Yu-Gi-Oh! War League Analysis",
    description:
      "Data pipelines to collect, process, and analyze Goat Format War League (GFWL) data.",
    href: "/projects/gfwl-analysis",
    image: "/gfwl-analysis.png",
    github: "https://github.com/nedhmn/gfwl-analysis",
    tags: ["Python", "Pandas", "Polars", "SQL", "AWS"],
  },
];

export type ProjectType = (typeof PROJECTS)[number];
