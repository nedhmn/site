import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BackPageProps {
  href: string;
  content: string;
}

export const BackPage = ({ href, content }: BackPageProps) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Link
        href={href}
        className="text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500 flex items-center gap-1"
      >
        <ArrowLeft size={16} /> {content}
      </Link>
    </div>
  );
};
