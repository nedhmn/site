export interface BlogType {
  title: string
  description: string
  date: string
  href: string
  tags: string[]
}

export const BLOGS: BlogType[] = [
  {
    title: 'Reflecting on My First Successful Options Portfolio',
    description:
      'A reflection on my first successful options portfolio, detailing the earnings strategy that brought nearly 40% returns in two quarters and the key insights gained.',
    date: '2025-05-27',
    href: '/blogs/reflecting-on-my-first-successful-options-portfolio',
    tags: ['Trading', 'Data Science', 'Data Engineering', 'R'],
  },
]
