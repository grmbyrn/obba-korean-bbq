"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, Users, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const timeSlots = [
  "12:00",
  "13:00",
  "14:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

const BookingSection = () => {
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState("20:00");

  return (
    <section id="booking" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground"
        >
          Reserve Your <span className="text-orange-500">Table</span>
        </motion.h2>
        <p className="mt-4 font-inter text-muted-foreground">
          Select your details below and we&apos;ll redirect you to confirm your
          reservation.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 rounded-md border border-border bg-card p-6 md:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="font-oswald text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" /> Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "w-full rounded-sm border border-border bg-secondary px-4 py-2.5 text-left font-inter text-sm transition-colors hover:border-primary",
                      !date && "text-muted-foreground",
                    )}
                  >
                    {date ? format(date, "PPP") : "Pick a date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 z-[9999] shadow-2xl border-none"
                  align="start"
                  side="bottom"
                  sideOffset={10}
                >
                  {/* We wrap the calendar in a div with a forced, non-transparent background */}
                  <div className="bg-black dark:bg-zinc-950 rounded-md overflow-hidden">
                    <Calendar
                      selected={date}
                      onSelect={(date) => setDate(date ?? undefined)}
                      disabled={(d) => d < new Date()}
                      initialFocus
                      className="p-3"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-2">
              <label className="font-oswald text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" /> Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full rounded-sm border border-border bg-secondary px-4 py-2.5 font-inter text-sm text-foreground transition-colors hover:border-primary appearance-none"
              >
                {partySizes.map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Time */}
            <div className="flex flex-col gap-2">
              <label className="font-oswald text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Clock className="h-4 w-4" /> Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-sm border border-border bg-secondary px-4 py-2.5 font-inter text-sm text-foreground transition-colors hover:border-primary appearance-none"
              >
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <a
            href="https://www.thefork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-full rounded-sm bg-primary px-8 py-3 font-oswald text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Confirm Reservation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
