import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import MapSection from "@/components/MapSection";
import DocumentsSection from "@/components/DocumentsSection";
import TravelAgentSection from "@/components/TravelAgentSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen bg-background">
          <Navigation />
          
          <section id="hero">
            <HeroSection />
          </section>
          
          <section id="timeline">
            <TimelineSection />
          </section>
          
          <section id="activities">
            <ActivitiesSection />
          </section>
          
          <section id="map">
            <MapSection />
          </section>
          
          <section id="documents">
            <DocumentsSection />
          </section>
          
          <section id="agent">
            <TravelAgentSection />
          </section>
          
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
