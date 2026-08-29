"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import ToggleThemeButton from "../ui/ToggleThemeButton";

const navItems = [
  { id: 1, title: "Features", href: "#features" },
  { id: 2, title: "Testimonials", href: "#testimonials" },
  { id: 3, title: "About", href: "#about" },
  { id: 4, title: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/80 shadow-sm shadow-gray-900/5 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/80"
          : "border-b border-transparent bg-white/70 backdrop-blur-md dark:bg-gray-950/70"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" onClick={closeMenu} className="flex items-center gap-2">
          <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path
              d="M13 0C5.82 0 0 5.37 0 12C0 15.94 2.04 19.43 5.2 21.62L4.1 29L11.4 24.86C11.93 24.94 12.46 24.98 13 24.98C20.18 24.98 26 19.61 26 12.98C26 5.37 20.18 0 13 0Z"
              fill="url(#navLogoGradient)"
            />
            <path d="M7.5 12.6L11 16L18.5 8.5" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="navLogoGradient" x1="0" y1="0" x2="26" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">
            HireLoom
            <span className="text-blue-600 dark:text-blue-400">AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors duration-150 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
            >
              {item.title}
            </a>
          ))}
          <ToggleThemeButton />
          <Button variant="primary" className="px-5 py-2.5 text-sm cursor-pointer">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-[1.5px] w-full origin-left bg-current transition-transform duration-300 ${
                isOpen ? "translate-y-[1px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] w-full origin-left bg-current transition-transform duration-300 ${
                isOpen ? "-translate-y-[1px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-200 bg-white/95 px-6 pb-8 pt-4 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/95">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="my-5 h-px w-full bg-gray-200 dark:bg-gray-800" />
          <div className="flex items-center justify-between gap-4">
            <ToggleThemeButton />
            <Button variant="primary" className="flex-1 justify-center py-2.5 text-sm cursor-pointer">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;