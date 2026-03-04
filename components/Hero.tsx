"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 max-w-4xl mx-auto py-20"
    >
      {/* TODO: Replace with your name */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
        Kobe McKinzie
      </h1>
      {/* TODO: Replace with your one-liner / tagline (e.g. "Full-Stack Developer — Next.js, React, Tailwind") */}
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        Full-Stack Developer — Next.js, React, Tailwind
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => scrollTo("projects")}
          className="px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}
