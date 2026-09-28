
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const volunteerImages = [
  "/images/volunteers/volunteer-1.jpg",
  "/images/volunteers/volunteer-2.jpg",
  "/images/volunteers/volunteer-3.jpg",
  "/images/volunteers/volunteer-4.jpg",
];

export default function VolunteerGallery() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Volunteers
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            The people behind the mission.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A community of people coming together to help students learn,
            create, and discover new possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {volunteerImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 1 || index === 2 ? "md:mt-10" : ""
              }`}
            >
              <div className="relative aspect-[4/5] hover:border-primary/80">
                <Image
                  src={image}
                  alt={`Tech For Tomorrow volunteer ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
