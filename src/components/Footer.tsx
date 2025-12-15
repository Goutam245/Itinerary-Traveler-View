import { motion } from "framer-motion";
import { Heart, Instagram, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-3xl text-background mb-4">Wanderlux</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Crafting extraordinary travel experiences for discerning adventurers. 
              Every journey is a masterpiece.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-sm uppercase tracking-wider text-background/80 mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Destinations", "Experiences", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-sm uppercase tracking-wider text-background/80 mb-4">Connect</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Globe].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/40 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-background/40 text-sm">
            © 2025 Wanderlux. All rights reserved.
          </p>
          <p className="text-background/40 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> for extraordinary journeys
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
