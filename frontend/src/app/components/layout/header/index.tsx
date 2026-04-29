"use client";

import { useState } from "react";
import Link from "next/link";
import { getImgPath } from "@/utils/image";
import Logo from "../logo";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumePath = getImgPath("/resume/Tanuj-Kumar-Resume.pdf");

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar absolute left-0 top-0 z-50 w-full">
      <div className="container">
        <nav className="py-4 sm:py-7">
          <div className="flex items-center justify-between gap-3">
            <Logo />

            <div className="hidden items-center rounded-full border border-black/10 bg-white/90 px-2 py-2 shadow-sm backdrop-blur md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-primary hover:text-white lg:text-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href={resumePath}
                download="Tanuj-Kumar-Resume.pdf"
                aria-label="Download Tanuj Kumar resume PDF"
                className="resume-download relative w-fit shrink-0 cursor-pointer overflow-hidden rounded-full border border-primary px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 group"
              >
                <span className="relative z-10 text-sm font-medium text-black transition-colors duration-300 group-hover:text-white sm:text-base">
                  <span className="sm:hidden">Resume</span>
                  <span className="hidden sm:inline">Download Resume</span>
                </span>
              </Link>

              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
                className="menu-toggle relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/15 bg-white/90 md:hidden"
              >
                <span className="relative z-10 flex h-4 w-5 flex-col justify-between">
                  <span
                    className={`h-0.5 w-full rounded-full bg-black transition-transform ${
                      isOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full rounded-full bg-black transition-opacity ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full rounded-full bg-black transition-transform ${
                      isOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="mt-4 rounded-lg border border-black/10 bg-white p-2 shadow-lg md:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-base font-medium text-black transition-colors hover:bg-primary hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
