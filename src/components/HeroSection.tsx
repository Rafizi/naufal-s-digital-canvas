import heroBg from "@/assets/hero-bg.jpg";
import naufalPhoto from "@/assets/naufal-photo.webp";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
{ value: "2+", label: "Years Exp." },
{ value: "5+", label: "Projects" },
{ value: "3+", label: "Roles" }];


const HeroSection = () =>
<section
  id="home"
  className="relative min-h-screen flex items-end overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-hero-dark/60 via-hero/40 to-hero-dark/80" />
    </div>

    {/* Photo — centered, z-10 */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
      <motion.img
      src={naufalPhoto}
      alt="Naufal Ar Rafizi"
      className="h-[70vh] md:h-[85vh] object-contain drop-shadow-2xl"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }} />

    </div>

    {/* Content overlay — z-20 */}
    <div className="relative z-100 w-full">
      {/* Main heading */}
      <div className="container mx-auto px-4">
        <motion.h1
        className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground leading-[0.9] tracking-tight text-center uppercase md:text-center font-sans bg-inherit"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>

          I'M NAUFAL
          <br />
          YOUR CODER
          <br />
          <span className="text-primary-foreground/80">EXPERT</span>
        </motion.h1>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pb-8 relative z-30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left text */}
          <motion.p
          className="text-primary-foreground/70 text-sm md:text-base max-w-xs text-center md:text-left font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}>

            Software Generalist
            <br />
            building across the
            <br />
            full product lifecycle
          </motion.p>

          {/* Stamp thumbnails / stats */}
          <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}>

            {stats.map((stat) =>
          <div
            key={stat.label}
            className="stamp-border bg-primary-foreground/10 backdrop-blur-sm rounded-sm px-4 py-3 text-center min-w-[80px]">

                <div className="text-primary-foreground font-heading font-extrabold text-xl">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-xs mt-1">
                  {stat.label}
                </div>
              </div>
          )}
          </motion.div>

          {/* Right text */}
          <motion.div
          className="text-right hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}>

            <p className="text-primary-foreground/70 text-sm font-light">
              mainly documenting
              <br />
              about my
              <br />
              creative journey
            </p>
            <a
            href="#contact"
            className="inline-block mt-3 glass-button px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">

              Hire Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}>

        <ChevronDown className="text-primary-foreground/50" size={28} />
      </motion.div>
    </div>

    {/* Right side nav (desktop) */}
    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end gap-3">
      {["home", "project", "about", "contact"].map((id, i) =>
    <a
      key={id}
      href={`#${id}`}
      className={`text-sm font-medium transition-colors ${
      i === 0 ?
      "text-primary-foreground font-bold" :
      "text-primary-foreground/50 hover:text-primary-foreground"}`
      }>

          {id}
        </a>
    )}
    </div>

    {/* Top right credit */}
    <div className="absolute top-20 right-8 z-20 text-right hidden md:block">
      <p className="text-primary-foreground/50 text-xs">Portfolio By</p>
      <p className="text-primary-foreground font-heading font-bold text-sm">
        @NAUFAL.RFZ
      </p>
    </div>
  </section>;


export default HeroSection;