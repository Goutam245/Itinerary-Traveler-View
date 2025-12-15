import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="font-display text-5xl md:text-7xl text-foreground mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Wanderlux
      </motion.h1>
      <div className="w-48 h-0.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-hero"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground font-accent">
        Preparing your adventure...
      </p>
    </motion.div>
  );
};

export default LoadingScreen;
