
const areas = [
  {
    title: "Artificial Intelligence",
    description:
      "Introduce students to AI, machine learning, and the rapidly evolving technologies shaping the future.",
  },
  {
    title: "Programming & Development",
    description:
      "Teach programming and computational thinking through practical, project-based learning.",
  },
  {
    title: "Creative Technology",
    description:
      "Help students explore graphic design, video editing, digital content creation, and other creative skills.",
  },
  {
    title: "Digital Literacy",
    description:
      "Build foundational knowledge of computers, the internet, digital tools, and responsible technology use.",
  },
  {
    title: "Technology Careers",
    description:
      "Expose students to careers and opportunities across technology, engineering, business, and other industries.",
  },
  {
    title: "Hands-on Projects",
    description:
      "Give students opportunities to turn what they learn into projects based on their interests and ideas.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Opening doors to the world of technology
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide students with practical skills, exposure, mentorship,
            and an understanding of how technology can become a pathway to
            future opportunities.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/80"
            >
              <h3 className="text-xl font-semibold">{area.title}</h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
