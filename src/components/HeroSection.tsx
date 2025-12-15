import { motion } from "framer-motion";
import { Heart, Share2, Sparkles, Cloud, Sun, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-rome.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Rome at golden hour - the Colosseum bathed in warm sunset light"
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "easeOut" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/30 to-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl text-center shadow-luxury-modal"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Curated Just for You</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Your Italian Masterpiece
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-accent text-lg md:text-xl text-muted-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Rome • Florence • Amalfi Coast
          </motion.p>
          
          <motion.p
            className="text-sm text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            June 15 – 24, 2025 • 10 Days of Wonder
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sun className="w-4 h-4 text-secondary" />
              <span>24°C in Rome</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Day 4 of 10</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground hidden sm:flex">
              <Users className="w-4 h-4 text-tertiary" />
              <span>2 Travelers</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button variant="hero" size="lg">
              Explore Your Journey
            </Button>
            <Button variant="glass" size="icon-lg">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="icon-lg">
              <Share2 className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-background/60">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-background/50 rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
