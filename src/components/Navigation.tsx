import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Calendar, Map, FileText, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Overview", href: "#hero" },
  { icon: Calendar, label: "Timeline", href: "#timeline" },
  { icon: Map, label: "Route", href: "#map" },
  { icon: FileText, label: "Documents", href: "#documents" },
  { icon: User, label: "Agent", href: "#agent" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-hero z-50 origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Desktop Nav - Floating Minimal */}
      <motion.nav
        className="fixed top-6 right-6 z-40 hidden md:flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-luxury"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === index
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setActiveSection(index)}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Customize Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          <Button variant="gold" size="default" className="rounded-full shadow-glow-gold">
            <Sparkles className="w-4 h-4 mr-2" />
            Customize
          </Button>
        </motion.div>
      </motion.nav>

      {/* Dot Navigation (Right side) */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isScrolled ? 1 : 0, x: isScrolled ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative flex items-center justify-end"
            onClick={() => setActiveSection(index)}
          >
            {/* Label */}
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-muted-foreground whitespace-nowrap">
              {item.label}
            </span>
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? "bg-primary scale-125 shadow-glow-primary"
                  : "bg-muted-foreground/30 hover:bg-primary/50"
              }`}
            />
          </a>
        ))}
      </motion.div>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        {/* Arc Menu Background */}
        <div className="relative">
          <svg
            className="absolute bottom-0 left-0 right-0 w-full h-20"
            viewBox="0 0 400 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 L0,30 Q200,-10 400,30 L400,80 Z"
              fill="hsl(var(--card))"
              className="drop-shadow-lg"
            />
          </svg>

          {/* Nav Items */}
          <div className="relative flex items-end justify-around px-4 pb-4 pt-6">
            {navItems.map((item, index) => {
              const isCenter = index === 2; // Map is center
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center gap-1 ${
                    isCenter ? "-translate-y-4" : ""
                  }`}
                  onClick={() => setActiveSection(index)}
                >
                  <div
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isCenter
                        ? "bg-gradient-hero text-primary-foreground shadow-glow-primary scale-110"
                        : activeSection === index
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <item.icon className={`${isCenter ? "w-6 h-6" : "w-5 h-5"}`} />
                  </div>
                  <span className={`text-xs ${activeSection === index ? "text-primary font-medium" : "text-muted-foreground"}`}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
