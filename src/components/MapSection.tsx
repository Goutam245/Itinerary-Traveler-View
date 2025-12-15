import { motion } from "framer-motion";
import { MapPin, Plane, Globe, Train } from "lucide-react";

const MapSection = () => {
  const cities = [
    { name: "Rome", x: 48, y: 52, days: "1-4", description: "Ancient wonders & Vatican treasures" },
    { name: "Florence", x: 45, y: 42, days: "5-7", description: "Renaissance art & Tuscan hills" },
    { name: "Amalfi", x: 52, y: 62, days: "8-10", description: "Coastal paradise & Italian sun" },
  ];

  const routes = [
    { from: "Rome", to: "Florence", type: "train", duration: "1h 30m" },
    { from: "Florence", to: "Amalfi", type: "drive", duration: "4h" },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-tertiary" />
            <span className="text-sm font-medium text-tertiary uppercase tracking-wider">Your Route</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Journey Through Italy
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            1,200 kilometers of breathtaking scenery. Three iconic destinations. 
            One unforgettable adventure.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-luxury-modal bg-gradient-to-br from-champagne/50 via-background to-accent/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Stylized Map Background */}
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Decorative Elements */}
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" />
                  <stop offset="100%" stopColor="hsl(var(--tertiary))" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Italy silhouette (simplified) */}
              <motion.path
                d="M42,15 Q52,18 50,28 L54,35 Q58,42 55,48 L52,55 Q50,62 54,68 Q58,72 52,78 Q46,82 50,88 L46,92 Q40,88 44,82"
                fill="none"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="0.8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />

              {/* Route Path: Rome to Florence */}
              <motion.path
                d="M48,52 C46,48 45,45 45,42"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="3,2"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* Route Path: Florence to Amalfi */}
              <motion.path
                d="M45,42 C48,48 50,55 52,62"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="3,2"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 }}
              />

              {/* Grid Lines */}
              {[...Array(10)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 10}
                  x2="100"
                  y2={i * 10}
                  stroke="hsl(var(--foreground) / 0.03)"
                  strokeWidth="0.3"
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 10}
                  y1="0"
                  x2={i * 10}
                  y2="100"
                  stroke="hsl(var(--foreground) / 0.03)"
                  strokeWidth="0.3"
                />
              ))}
            </svg>
          </div>

          {/* City Markers */}
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              className="absolute"
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2, type: "spring" }}
            >
              {/* Pulse Ring */}
              <motion.div
                className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/20"
                animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
              />

              {/* Marker */}
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 bg-gradient-hero rounded-full shadow-glow-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>

                {/* Label Card */}
                <div className={`absolute whitespace-nowrap ${index === 1 ? 'right-8 top-1/2 -translate-y-1/2' : 'left-8 top-1/2 -translate-y-1/2'}`}>
                  <div className="glass rounded-xl px-4 py-3 shadow-luxury">
                    <div className="font-heading text-base text-foreground">{city.name}</div>
                    <div className="text-xs text-primary font-medium mb-1">Days {city.days}</div>
                    <div className="text-xs text-muted-foreground max-w-[140px]">{city.description}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Animated Train Icon */}
          <motion.div
            className="absolute"
            initial={{ left: "48%", top: "52%" }}
            animate={{
              left: ["48%", "46%", "45%"],
              top: ["52%", "47%", "42%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 bg-secondary/90 p-2 rounded-full shadow-lg">
              <Train className="w-4 h-4 text-secondary-foreground" />
            </div>
          </motion.div>
        </motion.div>

        {/* Route Info Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {routes.map((route, index) => (
            <div key={index} className="glass rounded-xl px-6 py-4 flex items-center gap-4">
              <div className="text-sm">
                <span className="font-heading text-foreground">{route.from}</span>
                <span className="text-muted-foreground mx-2">→</span>
                <span className="font-heading text-foreground">{route.to}</span>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {route.type === "train" ? (
                  <Train className="w-4 h-4 text-primary" />
                ) : (
                  <Plane className="w-4 h-4 text-secondary" />
                )}
                <span>{route.duration}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          {cities.map((city) => (
            <div key={city.name} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-hero shadow-glow-primary" />
              <div>
                <span className="font-heading text-sm text-foreground">{city.name}</span>
                <span className="text-muted-foreground text-xs ml-2">Days {city.days}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
