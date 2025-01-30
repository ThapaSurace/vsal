import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Home from "@/components/Home";
import BoxReveal from "@/components/ui/box-reveal";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-4 xl:px-0 space-y-0 md:space-y-20">
      <section id="home">
        <Home />
      </section>

      <section id="about" className="py-10">
        <h1 className="text-2xl md:text-3xl tracking-wider font-bold border-b-2 border-violet-700 pb-2 w-fit mb-10">
          About Me
        </h1>

        <About />
      </section>

      <section id="experience" className="py-10">
        <h1 className="text-3xl tracking-wider font-bold border-b-2 border-violet-700 pb-2 w-fit">
          Experience
        </h1>
        <ExperienceTimeline />
      </section>

      <section id="contact" className="py-10">
        <h1 className="text-3xl tracking-wider font-bold border-b-2 border-violet-700 pb-2 w-fit">
          Contact
        </h1>
        <Contact />
      </section>
    </div>
  );
}
