"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const qualities = [
  "Passionate about helping children and communities",
  "Interested in technology, education, or social impact",
  "Willing to learn, collaborate, and take initiative",
  "Committed to creating a positive environment for students",
];

export default function WhyVolunteer() {
  return (
    <section className="border-y border-border/50 py-20 md:py-28">
      <div className="container mx-auto grid gap-14 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Volunteer?
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Your skills can create an opportunity.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            At Tech For Tomorrow, volunteers are more than helping hands.
            They are mentors, teachers, creators, and role models who help
            students see possibilities they may never have encountered before.
          </p>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Whether you can teach coding, design, AI, digital literacy,
            communication, or simply bring enthusiasm and creativity, there is
            a place for you here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid gap-4"
        >
          {qualities.map((quality, index) => (
            <motion.div
              key={quality}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex gap-4 rounded-2xl border border-border/60 hover:border-primary/80 bg-muted/20 p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <p className="text-sm leading-6 md:text-base">{quality}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
