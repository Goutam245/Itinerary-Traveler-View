import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Star, Verified, Clock, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    text: "Isabella made our honeymoon absolutely magical. Her insider recommendations transformed our trip into something we will treasure forever.",
    author: "Michael & Sarah",
    location: "San Francisco",
  },
  {
    text: "Every detail was perfect. The private Vatican tour and the hidden trattoria she suggested were highlights of our lives.",
    author: "The Williams Family",
    location: "New York",
  },
  {
    text: "Third trip planned by Isabella. She knows Italy like the back of her hand. Worth every penny.",
    author: "David Chen",
    location: "London",
  },
];

const TravelAgentSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-champagne/30 via-background to-accent/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="glass" className="p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Your Personal Concierge</span>
              </motion.div>

              {/* Avatar with Online Status */}
              <motion.div
                className="relative inline-block mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-tertiary p-1 shadow-glow-primary">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">👩‍💼</span>
                  </div>
                </div>
                {/* Online Status */}
                <motion.div
                  className="absolute bottom-2 right-2 w-5 h-5 bg-primary rounded-full border-4 border-card"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Name & Credentials */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground">Isabella Romano</h3>
                  <Verified className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground mb-2">Senior Italy Specialist</p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-gold" />
                    <span>12 Years Experience</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>Based in Rome</span>
                  </div>
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div
                className="flex items-center justify-center gap-1 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-gold text-gold" />
                  </motion.div>
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.9 (238 verified reviews)</span>
              </motion.div>

              {/* Availability */}
              <motion.div
                className="flex items-center justify-center gap-2 text-sm text-primary mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Clock className="w-4 h-4" />
                <span className="font-medium">Online now</span>
                <span className="text-muted-foreground">• Usually responds in 5 minutes</span>
              </motion.div>

              {/* Testimonials Carousel */}
              <motion.div
                className="bg-muted/50 rounded-2xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="font-accent text-lg text-foreground/80 italic mb-4">
                  "{testimonials[0].text}"
                </p>
                <p className="text-sm text-muted-foreground">
                  — {testimonials[0].author}, {testimonials[0].location}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Button variant="hero" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
                <Button variant="ghost" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="font-heading text-2xl text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Trips Planned</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelAgentSection;
