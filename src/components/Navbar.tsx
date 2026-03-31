import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#project" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* 1. Menambahkan max-width agar sinkron dengan section lain & px yang konsisten */}
      <div className="container mx-auto flex items-center justify-between h-16 px-6 md:px-12">
        <a
          href="#home"
          className="font-heading font-extrabold text-lg tracking-tight"
        >
          N<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 px-4 py-1.5 rounded-full transition-all duration-200 hover:bg-hero hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
          {/* Tooltip Blog */}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="text-sm font-medium text-muted-foreground/40 cursor-default px-4 py-1.5">
                Blog
              </span>
            </TooltipTrigger>
            <TooltipContent>Coming Soon</TooltipContent>
          </Tooltip>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2" // Tambah padding agar area klik lebih enak di mobile
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu - Full Screen Width logic */}
      {open && (
        <div className="md:hidden bg-background border-b border-border animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-foreground/70 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-hero hover:text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <span className="block text-sm font-medium text-muted-foreground/40 px-4 py-2">
              Blog <span className="text-xs">(Coming Soon)</span>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
