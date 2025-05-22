import { Footer } from '@/components/footer'
import { createMetadata } from '@/lib/metadata'
import { Inter } from 'next/font/google'
import { unstable_ViewTransition as ViewTransition } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = createMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="tracking-tight antialiased">
        <div className="flex min-h-screen flex-col justify-between bg-white p-8 pt-0 text-gray-900 md:pt-8 dark:bg-zinc-950 dark:text-zinc-200">
          <main className="mx-auto w-full max-w-[60ch] space-y-6">
            <ViewTransition name="test">{children}</ViewTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
