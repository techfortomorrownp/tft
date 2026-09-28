"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
    );
}

function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x="2"
                y="9"
                width="4"
                height="12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="4" cy="4" r="2" fill="currentColor" />
        </svg>
    );
}

const socials = [
    {
        name: "Instagram",
        description: "Follow our work, activities, and updates.",
        href: "https://www.instagram.com/techfortomorrow.__",
        icon: InstagramIcon,
    },
    {
        name: "LinkedIn",
        description: "Connect with Tech For Tomorrow and follow our journey.",
        href: "https://www.linkedin.com/company/tech-for-tomorrow-np/",
        icon: LinkedinIcon,
    }, {
        name: "Email",
        description: "Have a question, idea, or collaboration in mind?",
         href: "mailto:techfor.tomorrow07@gmail.com", 
         icon: Mail,

    },

];

export default function Contact() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden py-24 md:py-32">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_45%)]" />

            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="mb-6 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-primary" />

                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Get In Touch
                        </span>

                        <span className="h-px w-10 bg-primary" />
                    </div>

                    <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
                        Let&apos;s build a{" "}
                        <span className="text-primary">better tomorrow.</span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                        Whether you want to volunteer, collaborate, support our work, or
                        simply learn more about Tech For Tomorrow, we&apos;d love to hear
                        from you.
                    </p>
                </motion.div>

                {/* Social cards */}<div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
                    {socials.map((social, index) => {
                        const Icon = social.icon;

                        return (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.15 + index * 0.1,
                                }}
                                whileHover={{ y: -6 }}
                                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/70 p-8 backdrop-blur-xl transition-colors hover:border-primary/40 md:p-10"
                            >
                                {/* Glow */}
                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                                <div className="relative">
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <Icon className="h-7 w-7" />
                                        </div>

                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                                    </div>

                                    <h2 className="mt-8 text-2xl font-bold">
                                        {social.name}
                                    </h2>

                                    <p className="mt-3 leading-7 text-muted-foreground">
                                        {social.description}
                                    </p>

                                    <div className="mt-6 text-sm font-medium text-primary">
                                        Connect with us →
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>


                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mx-auto mt-24 max-w-3xl text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        Tech For Tomorrow
                    </p>

                    <p className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                        Every connection can be the beginning of an opportunity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
