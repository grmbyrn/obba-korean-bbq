"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const LocationSection = () => (
  <section id="location" className="py-24 px-6 bg-secondary/40">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-center text-foreground"
      >
        Find <span className="text-primary">Us</span>
      </motion.h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-md border border-border"
        >
          <iframe
            title="Obba Korean BBQ Barcelona"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.957772008576!2d2.1203107820579903!3d41.38517602589646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a499d69110376d%3A0xe14fea9a1479ee8d!2sOBBA%20Korea%20BBQ!5e0!3m2!1sen!2ses!4v1771569409219!5m2!1sen!2ses"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-8"
        >
          <div>
            <h3 className="font-oswald text-lg font-semibold uppercase tracking-wider text-primary">Address</h3>
            <p className="mt-2 font-inter text-muted-foreground flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Carrer de Nicaragua, 97, Les Corts, 08029 Barcelona, Spain
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 font-inter text-sm text-primary hover:underline"
            >
              Get Directions <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div>
            <h3 className="font-oswald text-lg font-semibold uppercase tracking-wider text-primary">Hours</h3>
            <div className="mt-2 space-y-1 font-inter text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Lunch:</span> 12:00 – 15:30</p>
              <p><span className="text-foreground font-medium">Dinner:</span> 19:00 – 23:30</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Closed on Mondays</p>
            </div>
          </div>

          <div>
            <h3 className="font-oswald text-lg font-semibold uppercase tracking-wider text-primary">Contact</h3>
            <div className="mt-2 space-y-1 font-inter text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +34 93 000 00 00
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> info@obbakoreanbbq.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
