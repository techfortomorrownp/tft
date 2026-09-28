
"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 " />

      {/* Soft gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.16),transparent_45%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Animated glow — left */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[140px]"
      />

      {/* Animated glow — right */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[150px]"
      />

      <div className="container mx-auto px-6">
        <div className="flex min-h-[75vh] flex-col items-center justify-center py-24 text-center md:min-h-[80vh]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>About Tech For Tomorrow</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-6xl text-5xl font-black tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Technology can change
            <br />

            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-primary to-blue-500 bg-clip-text text-transparent">
                the trajectory of a life.
              </span>

              {/* Underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-primary/30 md:-bottom-3"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg md:text-xl"
          >
            Tech For Tomorrow is a youth-led nonprofit working to bridge the
            technology and opportunity gap by giving underserved children and
            teenagers access to{" "}
            <span className="font-medium text-foreground">
              digital skills, mentorship, technology education, and exposure
              to the opportunities of tomorrow.
            </span>
          </motion.p>

          {/* Mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex max-w-2xl items-center gap-4 rounded-2xl border border-border/60 bg-background/60 px-5 py-4 text-left shadow-sm backdrop-blur-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>

            <p className="text-sm leading-6 font-semibold text-foreground">
             
              
               Every child deserves the power of technology.
      
            </p>
          </motion.div>

          {/* Bottom indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span>Learn</span>

            <span className="h-px w-10 bg-border" />

            <span>Create</span>

            <span className="h-px w-10 bg-border" />

            <span>Lead</span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-12 flex flex-col items-center gap-2 text-muted-foreground"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
