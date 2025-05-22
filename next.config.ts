import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
}

const withMDX = createMDX({})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
