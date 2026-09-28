
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Access",
    text: "Making technology education and opportunities more accessible to children who have been left behind.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    text: "Helping students build confidence, creativity, and the skills to shape their own futures.",
  },
  {
    icon: Users,
    title: "Opportunity",
    text: "Connecting young people with mentors, ideas, and pathways into the modern technological world.",
  },
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-4xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Mission
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Technology should be an{" "}
            <span className="text-primary">opportunity,</span> not a
            privilege.
          </h2>
        </motion.div>

        {/* Main mission statement */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

            <div className="pl-8 md:pl-10">
              <p className="text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
                We believe every child deserves the chance to discover,
                understand, and create with technology — regardless of their
                circumstances.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                Tech For Tomorrow works to bridge the gap in access to
                technology education, mentorship, and opportunity. We bring
                practical learning directly to underserved communities,
                introducing students to the skills and possibilities shaping
                the future.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Through interactive sessions, hands-on projects, mentorship,
                and exposure to real-world opportunities, we help students
                move beyond simply using technology — and begin imagining
                what they can build with it.
              </p>
            </div>
          </motion.div>

          {/* Mission visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/30 p-8 md:p-10">
              {/* Decorative glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />

              <div className="relative">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    What we believe
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>

                <div className="space-y-8">
                  {values.map((value, index) => {
                    const Icon = value.icon;

                    return (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + index * 0.1,
                        }}
                        className="flex gap-5"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="font-semibold">{value.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {value.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
