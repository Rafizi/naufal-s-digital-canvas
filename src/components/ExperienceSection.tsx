import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    year: "2024",
    role: "Frontend Developer",
    company: "Tech Startup Co.",
    description: "Led frontend architecture for SaaS dashboard, improving performance by 40% with code splitting and optimized rendering.",
    tag: "Developer",
  },
  {
    year: "2023",
    role: "Product Manager & UI Designer",
    company: "Digital Agency",
    description: "Managed end-to-end product cycle for 3 client projects, conducting user research and designing high-fidelity prototypes.",
    tag: "PM",
  },
];

const ExperienceSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="section-label mb-2 text-center">Experience</p>
        <h2 className="font-heading font-extrabold text-4xl md:text-6xl uppercase tracking-tight text-center">
          My Journey
        </h2>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative mt-16 max-w-3xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, i) => (
          <ScrollReveal
            key={i}
            direction={i % 2 === 0 ? "right" : "left"}
            delay={i * 0.15}
          >
            <div
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm px-3 py-1 rounded-full mb-3">
                  {exp.year}
                </span>
                <h3 className="font-heading font-bold text-lg">{exp.role}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {exp.description}
                </p>
                <span className="inline-block mt-3 text-xs font-semibold border border-primary text-primary px-2 py-1 rounded-full">
                  {exp.tag}
                </span>
              </div>

              {/* Dot */}
              <div className="hidden md:block absolute left-1/2 top-2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
