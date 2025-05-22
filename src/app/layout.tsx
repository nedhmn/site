import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import { Inter } from "next/font/google";
import { unstable_ViewTransition as ViewTransition } from "react";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="tracking-tight antialiased">
        <div className="flex flex-col items-center min-h-screen bg-white p-8 pt-0 text-gray-900 md:pt-8 dark:bg-zinc-950 dark:text-zinc-200">
          <Header />
          <main className="mx-auto space-y-6 w-[60ch] flex-1">
            <ViewTransition>{children}</ViewTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
