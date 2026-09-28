"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {

  return (
    <section
      className="relative isolate overflow-hidden"
 
    >
      {/* Base background */}
      <div className="absolute inset-0 -z-30 " />

      {/* Mouse-following glow */}
  

      {/* Main gradient */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_45%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Existing animated glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[140px]"
      />

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

      {/* Content */}
      <div className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            <span>
              Empowering underserved children through technology
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-6xl text-5xl font-black tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Every Child Deserves
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-blue-500 bg-clip-text text-transparent">
            The Power of Technology.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg md:text-xl"
        >
          Tech For Tomorrow is a youth-led nonprofit introducing children to
          <span className="font-medium text-foreground">
            {" "}
            digital literacy, Artificial Intelligence, coding, design,
            engineering,
          </span>{" "}
          and the technologies shaping tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link href="/volunteer">
            <Button
              size="lg"
              className="h-12 rounded-full px-6 text-base shadow-lg shadow-primary/20"
            >
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 rounded-full px-6 text-base backdrop-blur"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>Learn</span>
          <span className="h-px w-8 bg-border" />
          <span>Create</span>
          <span className="h-px w-8 bg-border" />
          <span>Innovate</span>
          <span className="h-px w-8 bg-border" />
          <span>Lead</span>
        </motion.div>
      </div>
    </section>
  );
}