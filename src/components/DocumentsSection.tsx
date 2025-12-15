import { motion } from "framer-motion";
import { FileText, Download, Check, Plane, Hotel, Shield, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Document {
  id: number;
  title: string;
  type: string;
  icon: React.ElementType;
  verified: boolean;
}

const documents: Document[] = [
  { id: 1, title: "Flight Itinerary", type: "PDF", icon: Plane, verified: true },
  { id: 2, title: "Hotel Confirmations", type: "PDF", icon: Hotel, verified: true },
  { id: 3, title: "Travel Insurance", type: "PDF", icon: Shield, verified: true },
  { id: 4, title: "Payment Receipt", type: "PDF", icon: CreditCard, verified: true },
];

const DocumentsSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
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
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Document Vault</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Your Travel Documents
          </h2>
          <p className="text-muted-foreground max-w-xl">
            All your essential documents, safely stored and easily accessible
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  variant="interactive"
                  className="relative p-6 bg-gradient-to-br from-card to-muted/30"
                >
                  {/* Leather texture effect */}
                  <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')]" />

                  {/* Verified Badge */}
                  {doc.verified && (
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg text-foreground mb-1">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{doc.type} Document</p>

                  {/* Download Button */}
                  <Button variant="ghost" size="sm" className="w-full justify-start text-primary hover:text-primary">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Download All */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="warm" size="lg">
            <Download className="w-5 h-5 mr-2" />
            Download All Documents
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentsSection;
