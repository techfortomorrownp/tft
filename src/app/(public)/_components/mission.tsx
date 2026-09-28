import { Laptop, BrainCircuit, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "Digital Literacy",
    description:
      "Teaching children the essential computer skills needed to thrive in today's digital world.",
  },
  {
    icon: BrainCircuit,
    title: "Emerging Technology",
    description:
      "Introducing AI, engineering, robotics, coding, and the innovations shaping tomorrow.",
  },
  {
    icon: HeartHandshake,
    title: "Build Futures",
    description:
      "Helping children discover how technology can empower every dream and every career.",
  },
];

export default function Mission() {
  return (
    <section className="container mx-auto px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-semibold uppercase tracking-wider text-primary">
          Our Mission
        </span>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Technology should never be a privilege.
        </h2>

        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          We believe every child deserves the opportunity to
          learn, create, and dream through technology.
          Our programs introduce underserved children to
          digital literacy and emerging technologies while
          inspiring them to build brighter futures.
        </p>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:border-primary"
          >
            <feature.icon className="mb-6 h-10 w-10 text-primary" />

            <h3 className="text-2xl font-semibold text-black dark:text-white">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}