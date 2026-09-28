
import Image from "next/image";

const foundingMembers = [
  {
    name: "Roshani Kumari Mahato",
    role: "Operations & Partnerships Lead",
    image: "/images/team/Roshani.jpg",
  },  {
    name: "Pranisha Phuyal",
    role: "Media & Storytelling Lead",
    image: "/images/team/Pranisha.jpg",
  },
  {
    name: "Nourin Shrestha",
    role: "UI/UX & Design Lead",
    image: "/images/team/Nourin.jpg",
  },
  {
    name: "Anushree Neupane",
    role: "Creative & Branding Lead",
    image: "/images/team/Anushree.jpg",
  },

];

export default function FoundingTeam() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Team
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Founding Members
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {foundingMembers.map((member) => (
            <div
              key={member.name}
              className="hover:border-primary/80 overflow-hidden rounded-2xl border bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-square bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold">{member.name}</h3>

                <p className="mt-1 text-sm font-medium text-primary">
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
