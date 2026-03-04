export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* TODO: Replace with your name */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your Name © {year}
        </p>
        <div className="flex gap-4">
          {/* TODO: Add your GitHub URL (remove or leave placeholder if you don't use it) */}
          <a
            href="https://github.com/ll-Kobe-ll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            GitHub
          </a>
          {/* TODO: Add your LinkedIn URL (remove or leave placeholder if you don't use it) */}
          <a
            href="https://linkedin.com/in/kobe-m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
