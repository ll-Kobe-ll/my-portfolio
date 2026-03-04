const skillGroups = [
  {
    label: "Shipped Projects With",
    description: "Used in real client work — AI-assisted workflow, solid conceptual grasp",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "JavaScript", "TypeScript", "Python", "SQL", "MongoDB", "Supabase", "Vercel", "Zapier", "n8n", "LLM Tooling"],
    pill: "bg-gray-900 text-white dark:bg-white dark:text-gray-900",
  },
  {
    label: "Explored for the Love of It",
    description: "Went deeper here out of genuine curiosity — concepts over fluency",
    skills: ["C++", "C#", "Unity", "Roblox Studio", "Networking & Sockets", "PC Hardware"],
    pill: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600",
  },
  {
    label: "Currently Building Fluency",
    description: "Putting in the reps — moving from navigating to owning it",
    skills: ["JavaScript", "React", "Python", "C#", "Algorithms & Data Structures"],
    pill: "bg-transparent text-gray-400 dark:text-gray-500 border border-dashed border-gray-300 dark:border-gray-700",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About
        </h2>
        <div className="max-w-2xl space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Started out wanting to build video games — that&apos;s still the long-term plan. Along the way I realized code could do a lot for real businesses, so I pivoted. Now I&apos;m working through a five-year plan: websites and automation tools for small businesses first, building toward the bigger stuff I actually want to create.
          </p>
          <p>
            I&apos;ll be straight: I&apos;ve shipped real projects across the web stack, but AI has been a genuine part of that workflow. I understand the concepts and can navigate the code, but I&apos;m not traditionally fluent. What I do have is a solid grasp of how things actually work under the hood — low-level concepts, networking, system fundamentals — and a research-and-figure-it-out mentality that gets me there regardless.
          </p>
          <p>
            That&apos;s changing on purpose. I&apos;m actively building real fluency now: LeetCode, structured study, writing code from scratch. The goal is to actually own what I build, not just navigate it. Planning and research are genuinely where I shine — I can map out complex systems, dig through docs nobody wants to read, and connect dots others miss.
          </p>
          <p>
            Beyond the front end, I also wire up automated workflows with Zapier and n8n. If you&apos;ve got something in mind, let&apos;s talk.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900 dark:text-white">
                  {group.label}
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {group.description}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${group.pill}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
