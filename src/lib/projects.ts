export const PROJECTS = [
  {
    title: "Yu-Gi-Oh! AI Chatbot",
    description: "AI RAG chatbot for Yu-Gi-Oh! Goat Format rulings.",
    href: "/projects/ygo-ruling-ai-chatbot",
    image: "/ygo-ai-chatbot.png",
    github: "https://github.com/nedhmn/ygo-ruling-ai-chatbot",
    tags: ["Next.js", "AI RAG"],
  },
  {
    title: "Yu-Gi-Oh! Discord Bot",
    description: "Discord bot for Yu-Gi-Oh! event submissions.",
    href: "/projects/ygo-war-league-discord-bot",
    image: "/ygo-war-league-discord-bot.png",
    github: "https://github.com/nedhmn/ygo-war-league-discord-bot",
    tags: ["Python", "SQL"],
  },
  {
    title: "StreetEasy Scraper",
    description:
      "Advanced web scraper using BrightData, webhooks, and secure tunnels.",
    href: "/projects/streeteasy-scraper",
    image: "/streeteasy-scraper.png",
    github: "https://github.com/nedhmn/streeteasy-scraper",
    tags: ["Python", "FastAPI", "Cloudflare", "SQL"],
  },
];

export type ProjectType = (typeof PROJECTS)[number];
