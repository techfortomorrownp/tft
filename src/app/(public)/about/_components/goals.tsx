
const goals = [
  "Provide children and teenagers with basic digital literacy and technology education.",

  "Develop awareness of cyber safety, responsible internet use, and digital citizenship.",

  "Expose students to the modern world and the opportunities created by technology.",

  "Introduce students to technology-related skills such as programming, graphic design, video editing, digital marketing, artificial intelligence, robotics, and other emerging fields.",

  "Help students understand how technology can be used across different careers and industries.",

  "Develop confidence, creativity, critical thinking, communication, problem-solving, and innovation through interactive learning.",

  "Provide practical, hands-on opportunities for students to build projects based on their interests.",

]

export default function GoalsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Goals
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            What we are working toward
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our work is guided by a simple belief: every student should have
            the opportunity to understand, use, and create with technology.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
          {goals.map((goal, index) => (
            <div
              key={goal}
              className="hover:border-primary/80 flex gap-5 rounded-2xl border bg-card p-6"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="leading-7 text-muted-foreground">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
