"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <button
          onClick={() => scrollTo("hero")}
          className="text-lg font-semibold text-gray-900 dark:text-white hover:opacity-80"
        >
          {/* TODO: Replace with your name or logo text */}
          Kobe McKinzie
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
