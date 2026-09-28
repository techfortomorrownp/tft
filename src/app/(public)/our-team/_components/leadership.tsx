import Image from "next/image";

const executiveDirectors = [
  {
    name: "Rajit Acharya",
    role: "Founder & Executive Director of Operations",
    image: "/images/team/Rajit.jpg",
  },
  {
    name: "Aadim Gyawali",
    role: "Founder & Executive Director of Programs",
    image: "/images/team/Aadim.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Leadership
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Executive Directors
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            The people leading Tech For Tomorrow and working to turn our
            mission into meaningful opportunities for students.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {executiveDirectors.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden hover:border-primary/80 rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-muted aspect-[4/3] relative">
                {/* Replace with Next Image later */}
                <Image
                  src={member.image}
                    alt={member.name}
                    width={500}
                    height={300}
                    // objectFit="contain"
                />
              </div>

              <div className="p-7 text-center">
                <h3 className="text-2xl font-bold">{member.name}</h3>

                <p className="mt-2 font-medium text-primary">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
