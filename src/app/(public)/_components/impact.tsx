
"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const START_DATE = new Date("2026-09-13T00:00:00");

type StatProps = {
  number: number;
  text: string;
  suffix?: string;
};

const initialStats = [
  {
    number: 80,
    increment: 10,
    title: "Children Reached",
    suffix: "+",
  },
  {
    number: 10,
    increment: 3,
    title: "Sessions Conducted",
    suffix: "+",
  },
  {
    number: 14,
    increment: 2,
    title: "Volunteers",
    suffix: "+",
  },
];

function Stat({ number, text, suffix = "" }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 text-center backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />

      {/* Glowing Orb */}
      <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-primary/30" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 transition-all duration-500 group-hover:ring-primary/50 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.35)]" />

      <h3 className="relative text-5xl font-bold text-primary">
        <CountUp
          end={number}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
        />
        {suffix}
      </h3>

      <p className="relative mt-3 text-muted-foreground">
        {text}
      </p>
    </motion.div>
  );
}

export default function Impact() {
  const [weeksPassed, setWeeksPassed] = useState(0);

  useEffect(() => {
    const calculateWeeks = () => {
      const now = new Date();

      const difference =
        now.getTime() - START_DATE.getTime();

      const weeks = Math.floor(
        difference / (1000 * 60 * 60 * 24 * 7)
      );

      setWeeksPassed(Math.max(0, weeks));
    };

    calculateWeeks();

    // Check every hour
    const interval = setInterval(
      calculateWeeks,
      60 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  const stats = initialStats.map((stat) => ({
    ...stat,
    number: stat.number + weeksPassed * stat.increment,
  }));

  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-primary">
            Our Impact
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Small Steps.
            <br />
            Lasting Change.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Every session creates new opportunities for children
            to explore technology, ask questions, and imagine
            futures they never thought possible.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Stat
              key={stat.title}
              number={stat.number}
              text={stat.title}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}