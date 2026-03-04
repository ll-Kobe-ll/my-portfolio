export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-[88vh] flex flex-col justify-center px-6 max-w-5xl mx-auto py-24"
    >
      <div className="inline-flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Available for work
        </span>
      </div>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-none">
        Kobe McKinzie
      </h1>
      <p className="mt-5 text-xl sm:text-2xl text-gray-500 dark:text-gray-400 max-w-xl font-light">
        Full-Stack Developer — React, Next.js, Tailwind
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={() => scrollTo("projects")}
          className="px-7 py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition shadow-lg shadow-gray-900/10"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="px-7 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}
