"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/data";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleNavigation = (to: string, offset: number) => {
    const section = document.querySelector(to);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    to: string,
    offset: number
  ) => {
    event.preventDefault(); // Prevent default link behavior
    handleNavigation(to, offset);
  };

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.to);
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop - 100 && // Adjust this threshold if needed
            window.scrollY < sectionTop + sectionHeight
          ) {
            setActiveSection(link.to.substring(1)); // Remove "#" for comparison
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className="fixed top-8 sm:top-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-6 items-center text-sm border rounded-md px-6 py-4 bg-white shadow-lg dark:bg-gray-900">
      {navLinks.map((link) => (
        <li key={link.id} className="cursor-pointer">
          <a
            href={link.to}
            onClick={(e) => handleClick(e, link.to, link.offset)}
            className={`transition-all duration-150 ease-in-out tracking-wider ${
              activeSection === link.to.substring(1)
                ? "border-b-2 border-violet-700 pb-1"
                : ""
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
