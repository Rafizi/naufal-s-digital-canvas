const Footer = () => (
  <footer className="border-t border-primary/30 bg-background py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-heading font-bold text-foreground">
        Naufal Ar Rafizi — <span className="font-normal text-muted-foreground">Software Generalist</span>
      </p>
      <div className="flex gap-6">
        {["Home", "Project", "About", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-primary transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <p>Designed & Built by Naufal · 2025</p>
    </div>
  </footer>
);

export default Footer;
