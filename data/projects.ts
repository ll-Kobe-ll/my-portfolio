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
];
