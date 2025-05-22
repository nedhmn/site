const LINKS = [
  { name: "@nedhmn", url: "https://x.com/nedhmn" },
  { name: "linkedin", url: "https://www.linkedin.com/in/ned-hermann" },
  { name: "github", url: "https://github.com/nedhmn" },
];

export const Footer = () => {
  return (
    <footer className="mt-12 text-center w-[60ch]">
      <div className="flex justify-center space-x-4 tracking-tight">
        {LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};
