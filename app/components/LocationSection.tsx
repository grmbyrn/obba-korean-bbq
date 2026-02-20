"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const LocationSection = () => (
  <section id="location" className="py-24 px-6 bg-secondary/40">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-center text-foreground"
      >
        Find <span className="text-orange-500">Us</span>
      </motion.h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 items-stretch">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-md border border-border h-full flex"
        >
          <iframe
            title="Obba Korean BBQ Barcelona"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.957772008576!2d2.1203107820579903!3d41.38517602589646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a499d69110376d%3A0xe14fea9a1479ee8d!2sOBBA%20Korea%20BBQ!5e0!3m2!1sen!2ses!4v1771569409219!5m2!1sen!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[350px]"
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
            <h3 className="font-oswald text-lg font-semibold uppercase tracking-wider text-primary">
              Address
            </h3>
            <a
              href="https://maps.app.goo.gl/kjgWNgckDingfiCg6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 font-inter text-sm text-primary hover:underline hover:text-orange-500"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Carrer de Nicaragua, 97, Les Corts, 08029 Barcelona, Spain
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div>
            <h3 className="font-oswald text-lg font-semibold uppercase tracking-wider text-primary mb-3">
              Hours
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 font-inter text-sm text-muted-foreground bg-background/60 rounded-lg p-4 shadow">
              <div className="font-bold text-foreground">Monday</div>
              <div>
                1–4 pm
                <br />
                7:30–11:30 pm
              </div>
              <div className="font-bold text-foreground">Tuesday</div>
              <div className="text-orange-500 font-semibold">Closed</div>
              <div className="font-bold text-foreground">Wednesday</div>
              <div>7:30–11 pm</div>
              <div className="font-bold text-foreground">Thursday</div>
              <div>
                1–4:30 pm
                <br />
                7:30–11:30 pm
              </div>
              <div className="font-bold text-foreground">Friday</div>
              <div>
                1–4:30 pm
                <br />
                7:30–11:30 pm
              </div>
              <div className="font-bold text-foreground">Saturday</div>
              <div>
                1–4:30 pm
                <br />
                7:30–11:30 pm
              </div>
              <div className="font-bold text-foreground">Sunday</div>
              <div>
                1–4:30 pm
                <br />
                7:30–11:30 pm
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-oswald text-lg font-semibold uppercase tracking-wider text-primary">
              Contact
            </h3>
            <div className="mt-2 space-y-1 font-inter text-sm text-muted-foreground">
              <a
                href="tel:+34633085581"
                className="mt-2 inline-flex items-center gap-1 font-inter text-sm text-primary hover:underline hover:text-orange-500"
                aria-label="Call us at +34 633 085 581"
              >
                <Phone className="h-4 w-4 text-primary" /> +34 633 085 581
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
