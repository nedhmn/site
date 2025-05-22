const LINKS = [
  { name: "@nedhmn", url: "https://x.com/nedhmn" },
  { name: "linkedin", url: "https://www.linkedin.com/in/ned-hermann" },
  { name: "github", url: "https://github.com/nedhmn" },
];

export const Footer = () => {
  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};
