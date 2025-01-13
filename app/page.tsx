import About from "@/components/About";
import Experience from "@/components/Experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Home from "@/components/Home";
import { experienceData } from "@/data/experience";
import React from "react";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-4 xl:px-0 space-y-20 mb-40">
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <h1 className="text-3xl tracking-wider font-bold border-b-2 border-violet-700 pb-2 w-fit mb-10">
          About Me
        </h1>
        <About />
      </section>

      <section id="experience" className="min-h-screen py-10">
        <h1 className="text-3xl tracking-wider font-bold border-b-2 border-violet-700 pb-2 w-fit mb-10">
          Work Experience
        </h1>
        <ExperienceTimeline experienceData={experienceData} />
      </section>
      <section id="articles" className="h-screen">
        <h1 className="text-3xl tracking-wider font-bold border-b-2 border-violet-700 pb-2 w-fit mb-10">
          Work Experience
        </h1>
        <Experience />
      </section>
    </div>
  );
}
