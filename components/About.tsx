export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About
        </h2>
        {/* TODO: Replace with your own short paragraph — keep it human, not corporate */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
        Started out wanting to build video games, but ended up falling in love with using code to solve real problems for real people. These days I focus on building clean, fast websites for small businesses that deserve a better online presence than what they&apos;ve got.
        AI is part of my workflow the same way good tooling is for any developer, it cuts through repetition so I can focus on what actually matters. That said, there&apos;s a foundation underneath it all. Low-level programming, networking, understanding how things actually work, not just how to make them look like they do.
        Beyond the front end, I also build automated workflows with Zapier and n8n, so if a business needs things connected and running behind the scenes, that&apos;s in my wheelhouse too.
        Fast learner, figure it out mentality, and genuinely enjoy the craft. If you&apos;ve got something in mind, let&apos;s talk.
        </p>
        <h3 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Skills
        </h3>
        <ul className="flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "Tailwind CSS",
            "JavaScript",
            "TypeScript",
            "Python",
            "C",
            "C#",
            "C++",
            "Luau",
            "HTML",
            "CSS",
            "Git",
            "Vercel",
            "Zapier",
            "n8n",
            "Roblox Studio",
            "Networking & Sockets",
            "Operating Systems basics",
          ].map((skill) => (
            <li
              key={skill}
              className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
