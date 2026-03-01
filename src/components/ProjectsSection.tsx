import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const filters = ["All", "Web", "Mobile", "UI Design"];

const projects = [
  {
    title: "E-Commerce Platform",
    role: "Frontend",
    category: "Web",
    description: "A modern e-commerce experience with real-time inventory and seamless checkout flow.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Health Tracker App",
    role: "PM",
    category: "Mobile",
    description: "Mobile health monitoring app with daily tracking, analytics dashboard, and reminders.",
    tech: ["Kotlin", "Firebase", "Material UI"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "Learning Management System",
    role: "UI Engineer",
    category: "Web",
    description: "Full-stack LMS with course builder, video streaming, and student progress analytics.",
    tech: ["React", "NestJS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  },
  {
    title: "Restaurant Finder",
    role: "Frontend",
    category: "Mobile",
    description: "Location-based restaurant discovery app with reviews, filters, and booking integration.",
    tech: ["Kotlin", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    title: "Portfolio Dashboard",
    role: "UI Engineer",
    category: "UI Design",
    description: "Investment portfolio tracker with real-time charts, asset allocation, and performance metrics.",
    tech: ["Figma", "React", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Task Management Tool",
    role: "Backend",
    category: "Web",
    description: "Collaborative task manager with real-time updates, role-based access, and Kanban boards.",
    tech: ["Next.js", "Prisma", "Socket.io"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
];

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
            8+ projects across web & mobile
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
          {filtered.map((project, i) => (
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
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-lg">
                      {project.title}
                    </h3>
                    <span className="text-xs font-semibold border border-primary text-primary px-2 py-1 rounded-full">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
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
                  <div className="flex gap-3">
                    <button className="flex items-center gap-1.5 text-sm border border-border px-4 py-2 rounded-md hover:border-primary transition-colors">
                      <Eye size={14} /> View Details
                    </button>
                    <button className="flex items-center gap-1.5 text-sm glass-button px-4 py-2 rounded-md">
                      <ExternalLink size={14} /> Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
