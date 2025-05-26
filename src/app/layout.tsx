import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
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
        <div className="flex min-h-screen flex-col items-center p-8 pt-0 md:pt-8">
          <Header />
          <main className="mx-auto w-full max-w-[60ch] flex-1 space-y-6">
            <ViewTransition>{children}</ViewTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
