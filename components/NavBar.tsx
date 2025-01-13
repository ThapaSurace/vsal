"use client";

import { navLinks } from "@/data/data";

export default function NavBar() {
  const handleNavigation = (id: string, offset: number) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-6 items-center text-sm border rounded-md px-6 py-4 bg-white shadow-lg dark:bg-gray-900">
      {navLinks.map((link) => (
        <li
          key={link.id}
          onClick={() =>
            handleNavigation(link.label.toLowerCase(), link.offset)
          }
          className="cursor-pointer hover:text-gray-900 
            transition-all duration-150 ease-in-out dark:text-white tracking-wider text-gray-800 font-light"
        >
          {link.label}
        </li>
      ))}
    </ul>
  );
}
