/**
 * Project data for the portfolio. Edit this file to add/remove projects.
 * Screenshots are generated dynamically via Microlink (no local files).
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Automated Blueprints",
    description: "Business strategy & automation site",
    liveUrl: "https://automatedblueprints.com/",
  },
  {
    id: "2",
    name: "BUC Door Systems",
    description: "Door systems company website",
    liveUrl: "https://bucdoorsystems.com/",
  },
  {
    id: "3",
    name: "The Narrow Path",
    description: "Church & ministry website",
    liveUrl: "https://the-narrow-path.vercel.app/",
  },
  {
    id: "4",
    name: "Zapier Automation Flow",
    description: "Automated workflow demo built with Zapier",
    liveUrl: "https://youtu.be/PepK9wNVKcQ",
  },
  {
    id: "5",
    name: "C Server — Divinity of Jesus",
    description: "Low-level HTTP server written in C",
    liveUrl: "https://github.com/ll-Kobe-ll/c-server-Divinity-of-Jesus",
  },
];
