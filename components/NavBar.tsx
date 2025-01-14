"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/data";
import Image from "next/image";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showNav, setShowNav] = useState<boolean>(false);

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
    <>
      <Button
        className="fixed top-4 sm:top-10 left-4 sm:left-20 border rounded-md p-2 md:hidden w-12 h-12"
        variant="outline"
        onClick={() => setShowNav(!showNav)}
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
            fill="#fff"
          />
        </svg>
      </Button>
      {/* desktop navbar */}
      <ul className="hidden fixed top-10 left-1/2 transform -translate-x-1/2 z-50 md:flex gap-6 items-center text-sm border rounded-md px-6 py-4 bg-white shadow-lg dark:bg-gray-900">
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

      {/* mobile navbar */}
      {showNav && (
        <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 z-40 ">
          <ul className="flex flex-col items-center gap-6 justify-center w-full h-full">
            {navLinks.map((link) => (
              <li key={link.id} className="cursor-pointer">
                <a
                  href={link.to}
                  onClick={(e) => {
                    handleClick(e, link.to, link.offset);
                    setShowNav(false);
                  }}
                  className="text-2xl font-bold tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="fixed top-4 right-4"
            variant="outline"
            onClick={() => setShowNav(false)}
          >
            <X />
          </Button>
        </div>
      )}
    </>
  );
}
