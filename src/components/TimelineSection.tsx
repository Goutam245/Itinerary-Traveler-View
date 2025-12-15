import { motion } from "framer-motion";
import { MapPin, Plane, Calendar, ChevronRight } from "lucide-react";
import romeImage from "@/assets/hero-rome.jpg";
import florenceImage from "@/assets/florence.jpg";
import amalfiImage from "@/assets/amalfi.jpg";
import colosseumImage from "@/assets/colosseum.jpg";
import vaticanImage from "@/assets/vatican.jpg";
import treviImage from "@/assets/trevi.jpg";
import uffizi from "@/assets/uffizi.jpg";
import ponteVecchio from "@/assets/ponte-vecchio.jpg";
import positano from "@/assets/positano.jpg";

interface TimelineDay {
  day: number;
  city: string;
  date: string;
  highlight: string;
  image: string;
  isPast: boolean;
  isCurrent: boolean;
}

const days: TimelineDay[] = [
  { day: 1, city: "Rome", date: "Jun 15", highlight: "Arrive at Fiumicino", image: romeImage, isPast: true, isCurrent: false },
  { day: 2, city: "Rome", date: "Jun 16", highlight: "Colosseum & Forum", image: colosseumImage, isPast: true, isCurrent: false },
  { day: 3, city: "Rome", date: "Jun 17", highlight: "Vatican Museums", image: vaticanImage, isPast: true, isCurrent: false },
  { day: 4, city: "Rome", date: "Jun 18", highlight: "Trevi & Trastevere", image: treviImage, isPast: false, isCurrent: true },
  { day: 5, city: "Florence", date: "Jun 19", highlight: "Train to Florence", image: florenceImage, isPast: false, isCurrent: false },
  { day: 6, city: "Florence", date: "Jun 20", highlight: "Uffizi Gallery", image: uffizi, isPast: false, isCurrent: false },
  { day: 7, city: "Florence", date: "Jun 21", highlight: "Tuscan Day Trip", image: ponteVecchio, isPast: false, isCurrent: false },
  { day: 8, city: "Amalfi", date: "Jun 22", highlight: "Coastal Drive", image: amalfiImage, isPast: false, isCurrent: false },
  { day: 9, city: "Amalfi", date: "Jun 23", highlight: "Positano Beach", image: positano, isPast: false, isCurrent: false },
  { day: 10, city: "Amalfi", date: "Jun 24", highlight: "Departure", image: amalfiImage, isPast: false, isCurrent: false },
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="max-w-7xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Your Journey</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
              10 Days Across Italy
            </h2>
            <p className="text-muted-foreground max-w-xl">
              From the ancient streets of Rome to the Renaissance treasures of Florence, 
              ending with sun-kissed days on the Amalfi Coast.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary font-medium cursor-pointer hover:gap-3 transition-all">
            <span>View full itinerary</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>

      {/* Horizontal Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-primary/30 to-border -translate-y-1/2" />

        {/* Days */}
        <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-8 px-4 md:px-8">
          {days.map((day, index) => (
            <motion.div
              key={day.day}
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div
                className={`
                  relative w-36 md:w-44 rounded-2xl overflow-hidden cursor-pointer group
                  transition-all duration-500
                  ${day.isCurrent ? "ring-2 ring-primary ring-offset-4 ring-offset-background scale-110 z-10" : ""}
                  ${day.isPast ? "opacity-70" : ""}
                `}
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={day.image}
                    alt={`Day ${day.day}: ${day.highlight}`}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${day.isPast ? "grayscale-[30%]" : ""}`}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-background/70 text-xs mb-1 font-medium">{day.date}</div>
                  <div className="font-heading text-background text-lg mb-1">Day {day.day}</div>
                  <div className="flex items-center gap-1 text-background/90 text-xs mb-2">
                    <MapPin className="w-3 h-3" />
                    {day.city}
                  </div>
                  <div className="text-background/70 text-xs line-clamp-1">{day.highlight}</div>
                </div>

                {/* Current Indicator */}
                {day.isCurrent && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full animate-pulse-soft flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-background rounded-full" />
                      Today
                    </div>
                  </div>
                )}

                {/* Past Indicator */}
                {day.isPast && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-background/20 backdrop-blur-sm text-background text-xs font-medium px-2 py-1 rounded-full">
                      Completed
                    </div>
                  </div>
                )}

                {/* Flight Icon Between Cities */}
                {(day.day === 4 || day.day === 7) && (
                  <motion.div
                    className="absolute -right-6 top-1/2 -translate-y-1/2 z-20"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="bg-secondary/90 p-1.5 rounded-full">
                      <Plane className="w-4 h-4 text-secondary-foreground rotate-0" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <motion.div
        className="max-w-7xl mx-auto mt-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Journey Progress</span>
          <span className="font-medium text-primary">40% Complete</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-hero rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default TimelineSection;
