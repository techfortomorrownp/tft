"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem]  px-6 py-16 text-black/80 dark:text-primary-foreground  md:px-16 md:py-24"
        >
          {/* Decorative background */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative mx-auto max-w-5xl">
            {/* Label */}
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="h-4 w-4" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] opacity-90">
                Our Vision
              </span>

              <Sparkles className="h-4 w-4" />
            </div>

            {/* Main statement */}
            <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              A future where every child can{" "}
              <span className="opacity-70">participate</span> in the digital
              world.
            </h2>

            {/* Divider */}
            <div className="mx-auto my-10 h-px w-20 bg-white/40" />

            {/* Description */}
            <p className="mx-auto max-w-3xl text-center text-lg leading-8 opacity-90 md:text-xl md:leading-9">
              We envision a world where a child&apos;s circumstances do not
              determine their access to technology, knowledge, mentorship, or
              opportunity.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 opacity-80 md:text-xl md:leading-9">
              Through education, exposure, and community, we want to help the
              next generation become{" "}
              <span className="font-semibold dark:text-white">
                confident creators
              </span>{" "}
              — not merely consumers — of technology.
            </p>

            {/* Closing statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <span className="text-sm font-medium uppercase tracking-wider opacity-70">
                The future starts with opportunity
              </span>

              <ArrowUpRight className="h-5 w-5 opacity-80" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
