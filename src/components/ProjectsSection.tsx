import { useState } from "react";
import { ExternalLink, Eye, Lock, Construction } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import mhaHero from "@/assets/project/mha-heroes.webp";
import pbnHero from "@/assets/project/pbn-heroes.webp";
import khlasifyHome from "@/assets/project/widget-home.webp";

// Untuk project yang belum ada screenshot-nya,
// tetap pakai Unsplash sementara:
const PLACEHOLDER_MOBILE = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop";
const PLACEHOLDER_MENTOR = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop";
const PLACEHOLDER_DEV    = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop";



const filters = ["All", "Web", "Mobile", "Mentor"];


const projects = [
  {
    title: "Prima Bukit Nusa",
    role: "Fullstack · UI Designer",
    category: "Web",
    description:
      "Company profile & portfolio website for a utility pole manufacturer. Built to attract new clients via digital presence with direct WhatsApp CTA. Deployed to client's own cPanel hosting.",
    tech: ["UI Design", "Fullstack", "cPanel"],
    image: pbnHero,
    status: "live",
    liveUrl: "https://primabukitnusa.com",
  },
  {
    title: "Mandiri Teknik Hade",
    role: "UI Designer · Client Liaison",
    category: "Web",
    description:
      "Landing page for a welding workshop business. Showcases profile and portfolio with direct WhatsApp and contact CTA to drive customer inquiries.",
    tech: ["UI Design", "Landing Page"],
    image: mhaHero,
    status: "live",
    liveUrl: "https://www.mandiritehnikhade.com/",
  },
  {
    title: "Khlasify Widget",
    role: "Backend Developer",
    category: "Web",
    description:
      "Custom Notion widget dashboard with Instagram app-style view. Supports Free & Pro tiers, connects to Notion databases, and can be embedded into Notion templates.",
    tech: ["Backend", "NestJS", "Notion API"],
    image: khlasifyHome,
    status: "in-progress",
    liveUrl: "https://widget.khlasify.com/",
  },
  {
    title: "Delta-KV",
    role: "Project Manager",
    category: "Web",
    description:
      "Information system website for a vocational school community in Bogor Regency. Features a CMS dashboard for content management. Leading a frontend & backend team.",
    tech: ["Project Management", "CMS", "Team Lead"],
    image: PLACEHOLDER_DEV,
    status: "in-progress",
    liveUrl: null,
  },
  {
    title: "Nongkrong App",
    role: "Mobile Developer",
    category: "Mobile",
    description:
      "Android app for discovering local hangout spots. Integrated with Firebase ecosystem and Google Maps Place ID API. Built as a solo thesis project.",
    tech: ["Kotlin", "Firebase", "Google Maps API"],
    image: PLACEHOLDER_MOBILE,
    status: "thesis",
    liveUrl: null,
  },
  {
    title: "Saku Ekosistem",
    role: "Mentor · Design Advisor",
    category: "Mentor",
    description:
      "Integrated canteen digital ecosystem for SMK Madinatulquran. Mentored the team on design, team management, brainstorming, and troubleshooting through the full build cycle.",
    tech: ["Mentoring", "UI Design", "Team Management"],
    image: PLACEHOLDER_MENTOR,
    status: "holding",
    liveUrl: null,
  },
  {
    title: "Lap Uang",
    role: "Mentor · Project Advisor",
    category: "Mentor",
    description:
      "Internal financial report dashboard system for SMK. Guided the student team through design decisions, project management structure, and problem-solving sessions.",
    tech: ["Mentoring", "Dashboard", "Team Management"],
    image: PLACEHOLDER_MENTOR,
    status: "holding",
    liveUrl: null,
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  live: {
    label: "Live",
    color: "bg-green-500/10 text-green-600 border-green-500/30",
    icon: <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block mr-1.5 animate-pulse" />,
  },
  "in-progress": {
    label: "In Progress",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    icon: <Construction size={10} className="inline mr-1" />,
  },
  thesis: {
    label: "Thesis Project",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    icon: <span className="mr-1">🎓</span>,
  },
  holding: {
    label: "On Hold",
    color: "bg-yellow-500/10 text-yellow-700 border-yellow-500/30",
    icon: <Lock size={10} className="inline mr-1" />,
  },
};

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="project" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="section-label mb-2">Portfolio</p>
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl uppercase tracking-tight">
            Selected Works
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            7 projects across web, mobile & team mentoring
          </p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal className="mt-8">
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary text-secondary-foreground border-border hover:border-primary/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, i) => {
            const status = statusConfig[project.status];
            return (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <div className="group bg-card rounded-lg border border-border overflow-hidden hover:-translate-y-1 hover:border-l-4 hover:border-l-primary transition-all duration-300 hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <h3 className="font-heading font-bold text-lg">
                        {project.title}
                      </h3>
                      <span className="text-xs font-semibold border border-primary text-primary px-2 py-1 rounded-full whitespace-nowrap">
                        {project.role}
                      </span>
                    </div>

                    {/* Status badge */}
                    <span className={`inline-flex items-center text-xs font-medium border px-2 py-0.5 rounded-full mb-3 ${status.color}`}>
                      {status.icon}{status.label}
                    </span>

                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <button className="flex items-center gap-1.5 text-sm border border-border px-4 py-2 rounded-md hover:border-primary transition-colors">
                        <Eye size={14} /> Case Study
                      </button>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm glass-button px-4 py-2 rounded-md"
                        >
                          <ExternalLink size={14} /> Live Site
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex items-center gap-1.5 text-sm border border-border px-4 py-2 rounded-md text-muted-foreground/40 cursor-not-allowed"
                        >
                          <Lock size={14} /> Not Public
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;