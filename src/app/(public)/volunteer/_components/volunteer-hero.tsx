
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function VolunteerHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_45%)]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Join Us
            </span>

            <span className="h-px w-10 bg-primary" />
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            Be part of{" "}
            <span className="text-primary">the change.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            We are looking for passionate people who want to use their time,
            skills, and ideas to create opportunities for underserved children
            through technology.
          </p>

          <motion.a
            href="https://docs.google.com/forms/d/1QBunostZulvoIEyHDSBzzgewcXLYLwKxmqhhS1etuoA/edit#responses"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            Apply to Volunteer
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
