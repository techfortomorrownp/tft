"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navbarData from "@/data/navbar.json";
import { ThemeToggle } from "@/components/mode-toggle";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";



export default function Navbar() {
  const pathname = usePathname();

  const color = "blue";

  const colors = {
    blue: {
      text: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-600 dark:bg-blue-500",
      hover: "hover:bg-blue-700 dark:hover:bg-blue-600",
      shadow:
        "shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)]",
    }
  };

  const currentColor = colors[color as keyof typeof colors];

  const VolunteerLink = () => {
    return (
      <Link
        href="/volunteer"
        className={`
          group
          relative
          overflow-hidden
          rounded-full
          ${currentColor.bg}
          px-6
          py-2.5
          text-sm
          font-semibold
          text-white
          ${currentColor.shadow}
          transition-all
          duration-300
          hover:scale-105
          active:scale-95
        `}
      >
        {/* Shine */}
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />

        <span className="relative z-10 flex items-center gap-2">
          Volunteer ❤️
        </span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold"
        >
          <img
            src="/logo.png"
            alt="Tech For Tomorrow"
            className="h-9 w-9"
          />

          <span className="text-black dark:text-white">
            Tech For Tomorrow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navbarData.links.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? currentColor.text
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}

          <VolunteerLink />
        </nav>

        {/* Desktop Toggle */}
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="
                  rounded-full
                  border border-border/60
                  bg-background/80
                  p-2.5
                  shadow-sm
                  transition-colors
                  hover:bg-muted
                "
                aria-label="Open menu"
              >
                <Menu className={`h-5 w-5 ${currentColor.text}`} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-80 border-l bg-background p-0"
            >
              <div className="flex h-full flex-col">

                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-5">
                  <ThemeToggle />

                  <SheetClose asChild>
                    <button
                      className="rounded-md p-2 transition-colors hover:bg-muted"
                      aria-label="Close menu"
                    />
                  </SheetClose>
                </div>

                {/* Title */}
                <div className="px-6 pt-6">
                  <SheetTitle className="text-lg font-semibold">
                    Tech For Tomorrow
                  </SheetTitle>
                </div>

                {/* Navigation */}
                <div className="flex-1 px-6 py-6">
                  <div className="flex flex-col gap-2">
                    {navbarData.links.map((item) => {
                      const isActive =
                        pathname === item.href ||
                        (item.href !== "/" &&
                          pathname.startsWith(item.href));

                      return (
                        <SheetClose asChild key={item.label}>
                          <Link
                            href={item.href}
                            className={`
                              rounded-lg
                              px-3
                              py-3
                              text-base
                              font-medium
                              transition-colors
                              ${
                                isActive
                                  ? `${currentColor.text} bg-muted`
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                              }
                            `}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      );
                    })}

                    <VolunteerLink />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}