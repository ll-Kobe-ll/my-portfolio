export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Kobe McKinzie © {year}
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/ll-Kobe-ll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kobe-m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
