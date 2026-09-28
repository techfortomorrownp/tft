
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Link } from "lucide-react";

export default function VolunteerCTA() {
  return (
    <section className="pb-24 pt-10 md:pb-36 md:pt-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Heart className="h-7 w-7" />
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to make a difference?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Join us in creating meaningful opportunities for the next
            generation. Fill out our volunteer application to get started.
          </p>

          <a
            href="https://docs.google.com/forms/d/1QBunostZulvoIEyHDSBzzgewcXLYLwKxmqhhS1etuoA/edit#responses"
            target="_blank"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl"
          >
            Become a Volunteer
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="mx-auto mt-10 h-px max-w-xs bg-border" />

          <p className="mt-6 text-sm text-muted-foreground">
            Every contribution of time, knowledge, and energy matters.
          </p>
        </motion.div>
      </div>
    </section>
  );

}