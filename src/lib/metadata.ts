import { Metadata } from 'next'

export const createMetadata = (): Metadata => {
  return {
    metadataBase: new URL('https://nedhmn.com'),
    alternates: {
      canonical: '/',
    },
    title: {
      default: 'Ned Hermann',
      template: '%s | Ned Hermann',
    },
    description: 'Software developer and data-enthusiast.',
  }
}
