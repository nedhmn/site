import "./globals.css";
import { Inter } from "next/font/google";
import { unstable_ViewTransition as ViewTransition } from "react";
import { createMetadata } from "@/lib/metadata";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            <ViewTransition name="test">{children}</ViewTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
