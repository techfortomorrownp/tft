"use client"
import { motion } from "framer-motion";

import VolunteerHero from "./_components/volunteer-hero";
import WhyVolunteer from "./_components/why-volunteer";
import VolunteerGallery from "./_components/volunteer-gallery";
import { useState } from "react";
import VolunteerCTA from "./_components/volunteer-cta";

export default function VolunteerPage() {
    const [mouse, setMouse] = useState({ x: 50, y: 50 });

  return (
    <main
      className="relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      {/* Cursor-following glow */}
      <motion.div
        className="
          pointer-events-none
          absolute -z-10
          h-[500px] w-[500px]
          rounded-full
          bg-primary/15
          blur-[120px]
          dark:bg-blue-700/40
        "
        animate={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      <VolunteerHero />
      <WhyVolunteer />
      <VolunteerGallery />
      <VolunteerCTA />
    </main>
  );
}
