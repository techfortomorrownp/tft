import Link from "next/link";
import footerData from "@/data/footer.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Tech For Tomorrow</h2>

            <p className="mt-4 max-w-md text-primary-foreground/80">
              Empowering underserved children through technology education,
              innovation, and opportunities that inspire the next generation.
            </p>
          </div>

          {/* Dynamic Sections */}
          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold">
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-primary-foreground/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/70 md:flex-row">
          <p>
            © {currentYear} Tech For Tomorrow. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {/* <Link
              href="/privacy"
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}