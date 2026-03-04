import Image from "next/image";
import { projects } from "@/data/projects";

const microlinkScreenshotUrl = (siteUrl: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={microlinkScreenshotUrl(project.liveUrl)}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <span className="mt-2 inline-block text-sm font-medium text-blue-600 dark:text-blue-400">
                    View live site →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
