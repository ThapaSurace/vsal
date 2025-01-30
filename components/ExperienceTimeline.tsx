import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/ui/timeline";
import { LocateFixed } from "lucide-react";
import { Badge } from "./ui/badge";

export default function ExperienceTimeline() {
  const experienceData = [
    {
      title: "July 2023 - Present",
      content: (
        <div className="">
          <div>
            <div className="mb-4 space-y-1">
              <span className="flex flex-col gap-1 text-3xl font-semibold tracking-wider">
                NEPAL HEALTH RESEARCH COUNCIL
              </span>
            </div>
            <div className="flex flex-col border-y gap-2 py-4">
              <div className=" text-gray-700 dark:text-gray-300 tracking-wide flex gap-1 items-center">
                <LocateFixed size={15} />
                <span>RAMSHAHPATH KATHMANDU</span>
              </div>
              <Badge className="space-x-1 w-fit">
                <span>Role</span>
                <span>:</span>
                <span> RESEARCH ASSISTANT</span>
              </Badge>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg mb-4 font-medium tracking-wide">
              Responsibilities
            </h3>
            <ul className="text-sm space-y-2 list-disc px-4 md:px-0">
              <li>Research Assistant in Non-Communicable Diseases Project</li>
              <li>
                Developed training manual and proposal on implementation
                research related to dengue control in collaboration with the
                Institute of Tropical Medicine (ITM)
              </li>
              <li>
                Organized the 10th National Summit of Nepal Health Research
                Council – "Advancing Health and Population Research and
                Innovations: Achieving SDGs"
              </li>
              <li>
                Organized the 24th International FERCAP Conference 2024 –
                "Maximizing Benefit through Responsible Conduct of Research"
              </li>
              <li>
                Co-investigator in a pesticide-related research project:
                “Integrated Assessment of Self-Reported Pesticide Toxicity,
                Farmer's Knowledge and Practices, and Occupational Health
                Safety: A Dual Perspective Study in Vegetable Farming
                Communities” in collaboration with MdM France
              </li>
              <li>
                Led qualitative research entitled “Exploring Perceptions of
                People on the Effects of Climate Change in Urban Communities of
                the Mountain Region in Nepal” from data collection to report
                making
              </li>
              <li>Composed numerous book chapters, manuscripts, and reports</li>
              <li>
                Conducted data analysis using qualitative, quantitative,
                bibliometric, and spatial techniques
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2024 – 2025",
      content: (
        <div>
          <div>
            <div className="mb-4 space-y-1">
              <span className="flex flex-col gap-1 text-3xl font-semibold tracking-wider capitalize">
                Planetary health research center
              </span>
            </div>
            <div className="flex flex-col border-y py-4 gap-2">
              <div className=" text-gray-700 dark:text-gray-300 tracking-wide flex gap-1 items-center">
                <LocateFixed size={15} />
                <span>Nagarjun, Kathmandu</span>
              </div>
              <Badge className="space-x-1 w-fit">
                <span>Role</span>
                <span>:</span>
                <span>Research Consultant</span>
              </Badge>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg mb-4 font-medium tracking-wide">
              Responsibilities
            </h3>
            <ul className="text-sm space-y-2 list-disc  px-4 md:px-0">
              <li>
                Engaged in cliamte and health application platform CHAP project.
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      title: "Feb 2022 - Jan 2023",
      content: (
        <div>
          <div>
            <div className="mb-4 space-y-1">
              <span className="flex flex-col gap-1 text-3xl font-semibold tracking-wider">
                ENVIRONMENT AND PUBLIC HEALTH ORGANIZATION
              </span>
            </div>
            <div className="flex flex-col border-y gap-2 py-4">
              <div className=" text-gray-700 dark:text-gray-300 tracking-wide flex gap-1 items-center">
                <LocateFixed size={15} />
                <span>BANESHWOR, KATHMANDU, NEPAL</span>
              </div>
              <Badge className="space-x-1 w-fit">
                <span>Role</span>
                <span>:</span>
                <span>PAID VOLUNTEER</span>
              </Badge>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg mb-4 font-medium tracking-wide">
              Responsibilities
            </h3>
            <ul className="text-sm space-y-2 list-disc  px-4 md:px-0">
              <li>
                Conduct awareness campaigns on air pollution and solid waste
                management in the community and schools of various
                municipalities within Kathmandu Valley
              </li>
              <li>
                Coordinate and communicate with local CSOs, CBOs, schools, and
                community groups under the guidance of the project team to
                promote clean air in the municipality
              </li>
              <li>
                Conduct orientation on air pollution and solid waste management
                as instructed by the project team
              </li>
              <li>
                Door-to-door visits and information dissemination to households
                on standard septic tanks
              </li>
              <li>
                Collect information on residents' knowledge and practices of
                septic tanks, including photographs and participant testimonials
              </li>
              <li>
                Worked as a project coordinator in a cholera project (managing
                booths, coordinating with UHC, FCHV, and volunteers)
              </li>
              <li>Engaged as a project lead in WASH and CCRM projects</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={experienceData} />;
}
