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
    name: "Automated Blueprint Strategies",
    description: "Business strategy landing page",
    liveUrl: "https://automated-blueprint-strategies.vercel.app/",
  },
  {
    id: "2",
    name: "The Narrow Path",
    description: "Church & ministry website",
    liveUrl: "https://the-narrow-path.vercel.app/",
  },
  {
    id: "3",
    name: "Roofing Template",
    description: "Roofing contractor template",
    liveUrl: "https://roofing-template-site.vercel.app/",
  },
  {
    id: "4",
    name: "Mesa Valley Pipe & Supply",
    description: "Pipe & supply company demo",
    liveUrl: "https://mesa-valley-pipe-and-supply.vercel.app/",
  },
  {
    id: "5",
    name: "Zapier Automation Flow",
    description: "Automated workflow demo built with Zapier",
    liveUrl: "https://youtu.be/PepK9wNVKcQ",
  },
  {
    id: "6",
    name: "C Server — Divinity of Jesus",
    description: "Low-level HTTP server written in C",
    liveUrl: "https://github.com/ll-Kobe-ll/c-server-Divinity-of-Jesus",
  },
];
