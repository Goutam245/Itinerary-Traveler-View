import { motion } from "framer-motion";
import { Clock, MapPin, Star, Utensils, Bed, Landmark, Wine, Camera, Coffee, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import colosseumImage from "@/assets/colosseum.jpg";
import vaticanImage from "@/assets/vatican.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import hotelImage from "@/assets/hotel.jpg";
import vineyardImage from "@/assets/vineyard.jpg";
import florenceImage from "@/assets/florence.jpg";
import treviImage from "@/assets/trevi.jpg";
import uffizi from "@/assets/uffizi.jpg";
import gelato from "@/assets/gelato.jpg";
import ponteVecchio from "@/assets/ponte-vecchio.jpg";
import positano from "@/assets/positano.jpg";
import amalfi from "@/assets/amalfi.jpg";

interface Activity {
  id: number;
  type: "attraction" | "food" | "hotel" | "wine" | "photo" | "experience";
  title: string;
  subtitle: string;
  time: string;
  duration: string;
  image: string;
  badge?: string;
  isNow?: boolean;
  location: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: "attraction",
    title: "Colosseum Underground Tour",
    subtitle: "Walk where gladiators once stood. Descend into the ancient hypogeum and arena floor.",
    time: "9:00 AM",
    duration: "3 hours",
    image: colosseumImage,
    badge: "VIP Access",
    isNow: true,
    location: "Rome",
  },
  {
    id: 2,
    type: "food",
    title: "Roscioli Salumeria",
    subtitle: "Savor the finest cured meats and aged cheeses at this legendary Roman deli.",
    time: "1:00 PM",
    duration: "2 hours",
    image: restaurantImage,
    badge: "Local Favorite",
    location: "Rome",
  },
  {
    id: 3,
    type: "attraction",
    title: "Trevi Fountain at Twilight",
    subtitle: "Make a wish as the baroque masterpiece glows under the evening lights.",
    time: "6:30 PM",
    duration: "45 min",
    image: treviImage,
    location: "Rome",
  },
  {
    id: 4,
    type: "hotel",
    title: "Portrait Roma",
    subtitle: "Your luxury suite overlooks Via Condotti. Wake up to espresso and Roman rooftops.",
    time: "Check-in",
    duration: "3 nights",
    image: hotelImage,
    badge: "Ferragamo Collection",
    location: "Rome",
  },
  {
    id: 5,
    type: "attraction",
    title: "Vatican Museums & Sistine Chapel",
    subtitle: "Stand beneath Michelangelo's ceiling. Private evening access, no crowds.",
    time: "5:00 PM",
    duration: "4 hours",
    image: vaticanImage,
    badge: "After Hours",
    location: "Vatican City",
  },
  {
    id: 6,
    type: "experience",
    title: "Artisan Gelato Masterclass",
    subtitle: "Learn centuries-old recipes from a fourth-generation gelataio in Trastevere.",
    time: "3:00 PM",
    duration: "2 hours",
    image: gelato,
    badge: "Hands-On",
    location: "Rome",
  },
  {
    id: 7,
    type: "wine",
    title: "Chianti Sunset Tasting",
    subtitle: "Watch the Tuscan hills turn golden as you sip Brunello di Montalcino.",
    time: "5:30 PM",
    duration: "3 hours",
    image: vineyardImage,
    badge: "Private Estate",
    location: "Tuscany",
  },
  {
    id: 8,
    type: "attraction",
    title: "Uffizi Gallery",
    subtitle: "Face to face with Botticelli's Venus. Early morning access before the crowds.",
    time: "8:00 AM",
    duration: "3 hours",
    image: uffizi,
    badge: "Priority Entry",
    location: "Florence",
  },
  {
    id: 9,
    type: "photo",
    title: "Ponte Vecchio Golden Hour",
    subtitle: "Capture the medieval bridge as the Arno reflects the setting sun.",
    time: "6:00 PM",
    duration: "1.5 hours",
    image: ponteVecchio,
    location: "Florence",
  },
  {
    id: 10,
    type: "attraction",
    title: "Positano Beach Day",
    subtitle: "Crystal waters and colorful cliffs. Your reserved sunbeds await.",
    time: "10:00 AM",
    duration: "Full Day",
    image: positano,
    badge: "Beach Club",
    location: "Amalfi Coast",
  },
  {
    id: 11,
    type: "experience",
    title: "Amalfi Coastal Cruise",
    subtitle: "Private yacht along the Amalfi Coast. Prosecco, swimming, and hidden coves.",
    time: "2:00 PM",
    duration: "4 hours",
    image: amalfi,
    badge: "Private Charter",
    location: "Amalfi Coast",
  },
  {
    id: 12,
    type: "photo",
    title: "Florence Duomo Sunrise",
    subtitle: "Watch the first light kiss Brunelleschi's dome from a secret rooftop terrace.",
    time: "5:45 AM",
    duration: "2 hours",
    image: florenceImage,
    badge: "Exclusive Access",
    location: "Florence",
  },
];

const typeIcons = {
  attraction: Landmark,
  food: Utensils,
  hotel: Bed,
  wine: Wine,
  photo: Camera,
  experience: Compass,
};

const typeColors = {
  attraction: "text-primary",
  food: "text-secondary",
  hotel: "text-accent",
  wine: "text-tertiary",
  photo: "text-gold",
  experience: "text-primary",
};

const ActivityCard = ({ activity, index }: { activity: Activity; index: number }) => {
  const Icon = typeIcons[activity.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Card
        variant="interactive"
        className={`group relative overflow-hidden ${activity.isNow ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
      >
        {/* Image with Ken Burns effect */}
        <div className="aspect-[4/5] overflow-hidden">
          <motion.img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent opacity-90" />

        {/* Badge */}
        {activity.badge && (
          <div className="absolute top-4 left-4">
            <Badge variant="gold" className="shadow-lg">
              {activity.badge}
            </Badge>
          </div>
        )}

        {/* Now Badge */}
        {activity.isNow && (
          <div className="absolute top-4 right-4">
            <Badge variant="live" className="flex items-center gap-1">
              <span className="w-2 h-2 bg-background rounded-full animate-pulse" />
              Now
            </Badge>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Location & Time */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 text-background/80">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{activity.location}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-background/70">
              <Clock className="w-3 h-3" />
              {activity.time}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl text-background mb-2 group-hover:text-gold transition-colors">
            {activity.title}
          </h3>

          {/* Subtitle */}
          <p className="font-accent text-sm text-background/80 mb-3 line-clamp-2">
            {activity.subtitle}
          </p>

          {/* Duration & Type */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-background/60">
              <div className="w-8 h-0.5 bg-gradient-to-r from-gold to-transparent" />
              {activity.duration}
            </div>
            <div className={`flex items-center gap-1.5 ${typeColors[activity.type]}`}>
              <Icon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ActivitiesSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-gold uppercase tracking-wider">Handcrafted Experiences</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Your Italian Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            From ancient ruins to Renaissance masterpieces, Tuscan vineyards to Amalfi sunsets — 
            every moment has been thoughtfully curated for you.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
