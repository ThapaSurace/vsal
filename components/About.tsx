import SkillLists from "@/components/SkillLists";
import EducationTimeline from "@/components/EducationTimeline";
import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/education";
import FadeInOut from "./animation/FadeInOut";

export default function About() {
  return (
    <>
      {/* Professional Summary Section */}

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-xl md:text-2xl font-semibold mb-4 tracking-wider">
          Professional Summary
        </h2>

        <p className="text-secondary-foreground text-sm md:text-base md:leading-relaxed text-justify md:tracking-wide">
          A proactive Bachelor of Public Health (B.P.H) student at Purbanchal
          University with strong academic achievement and volunteering
          experience. Possess strong analytical and communication skills with
          fluency in English and Nepali. Keen to pursue a career in professional
          services with a focus on research and as a data analyst in social
          science.
        </p>
      </div>

      <Separator className="my-10 md:my-16" />

      {/* Skills Section */}
      <div>
        <h2 className="scroll-m-20 text-xl md:text-2xl font-semibold mb-6 md:mb-10 tracking-wider">
          Skills
        </h2>
        <SkillLists />
      </div>

      <Separator className="my-10 md:my-16" />

      {/* Education Section */}
      <div>
        <h2 className="scroll-m-20 text-primary flex items-center gap-2 mb-10">
          <span className="scroll-m-20 text-2xl font-semibold tracking-wider">
            Education
          </span>
          <GraduationCap size={40} />
        </h2>
        <EducationTimeline educationData={educationData} />
      </div>
    </>
  );
}
