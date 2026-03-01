import { Download, Code, Database, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const clusters = [
  {
    icon: Code,
    label: "Frontend & Web",
    skills: ["Next.js", "React + Vite"],
  },
  {
    icon: Database,
    label: "Backend & Database",
    skills: ["NestJS", "SQL"],
  },
  {
    icon: Smartphone,
    label: "Mobile",
    skills: ["Kotlin", "Java Mobile"],
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <ScrollReveal direction="right">
          <p className="section-label mb-3">About Me</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Adaptable by nature.
            <br />
            <span className="text-primary">Technical by choice.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
            I'm Naufal — a Software Generalist with 2 years of hands-on
            experience across the full product lifecycle. From scoping
            requirements as PM, designing interfaces, to shipping frontend and
            backend code.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 glass-button px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider"
          >
            <Download size={16} />
            Download CV
          </a>
        </ScrollReveal>

        {/* Right — Skills */}
        <ScrollReveal direction="left">
          <div className="space-y-6">
            {clusters.map((cluster) => (
              <div
                key={cluster.label}
                className="stamp-border rounded-lg p-5 bg-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <cluster.icon size={16} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-primary uppercase tracking-wide">
                    {cluster.label}
                  </h3>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {cluster.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground text-sm">
            <span className="font-semibold text-foreground">Roles I've covered:</span>{" "}
            Developer · UI Engineer · Frontend · Backend · Product Manager
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
