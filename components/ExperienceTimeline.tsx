import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/ui/timeline";
import { LocateFixed } from "lucide-react";
import { Badge } from "./ui/badge";

export default function ExperienceTimeline() {
  const experienceData = [
    {
      title: "04/2022 – 06/2022",
      content: (
        <div className="">
          <div>
            <div className="mb-4 space-y-1">
              <span className="flex flex-col gap-1 text-3xl font-semibold tracking-wider">
                ENPHO
              </span>
            </div>
            <div className="flex justify-between items-center border-y py-4">
              <div className=" text-gray-700 dark:text-gray-300 tracking-wide flex gap-1 items-center">
                <LocateFixed size={15} />
                <span>Lalitpur</span>
              </div>
              <Badge className="space-x-1">
                <span>Role</span>
                <span>:</span>
                <span> Volunteer</span>
              </Badge>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg mb-4 font-medium tracking-wide">
              Responsibilities
            </h3>
            <ul className="text-sm space-y-2 list-disc px-4 md:px-0">
              <li>
                Planned, prepared and delivered sessions related WASH and CCRM
                for students of class 7 and 8.
              </li>
              <li>
                Delivered lessons with enthusiasm and positivity to inspire
                students about the risk and capacity near their surroundings as
                well as the quality of water they were drinking.
              </li>
              <li>
                Used planning skills to facilitate smooth running of the
                sessions.
              </li>
              <li>
                Performed narrative analysis to assess and analyze the knowledge
                of students.
              </li>
              <li>
                Planned, monitored and supervised the activities like mapping
                and transect walk.
              </li>
              <li>
                Delivered fun, safe and educational WASH lessons to groups of
                students.
              </li>
              <li>Finally prepared a report of overall CCRM.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "04/2022 – 04/2022",
      content: (
        <div>
          <div>
            <div className="mb-4 space-y-1">
              <span className="flex flex-col gap-1 text-3xl font-semibold tracking-wider">
                NIHE
              </span>
            </div>
            <div className="flex justify-between items-center border-y py-4">
              <div className=" text-gray-700 dark:text-gray-300 tracking-wide flex gap-1 items-center">
                <LocateFixed size={15} />
                <span>Lalitpur</span>
              </div>
              <Badge className="space-x-1">
                <span>Role</span>
                <span>:</span>
                <span>Pashupati</span>
              </Badge>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg mb-4 font-medium tracking-wide">
              Responsibilities
            </h3>
            <ul className="text-sm space-y-2 list-disc  px-4 md:px-0">
              <li>Conducted surveys and documented all responses.</li>
              <li>Collected waste related information at Pashupati area.</li>
              <li>
                Compiled and analyzed data using Microsoft Excel and Access.
              </li>
              <li>
                Managed daily assignment schedule in an efficient and accurate
                manner.
              </li>
              <li>Made the tool in Kobo Toolbox.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "03/2022 – 03/2022",
      content: (
        <div>
          <div>
            <div className="mb-4 space-y-1">
              <span className="flex flex-col gap-1 text-3xl font-semibold tracking-wider">
                ENPHO
              </span>
            </div>
            <div className="flex justify-between items-center border-y py-4">
              <div className=" text-gray-700 dark:text-gray-300 tracking-wide flex gap-1 items-center">
                <LocateFixed size={15} />
                <span>Bhaktapur</span>
              </div>
              <Badge className="space-x-1">
                <span>Role</span>
                <span>:</span>
                <span>Volunteer</span>
              </Badge>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg mb-4 font-medium tracking-wide">
              Responsibilities
            </h3>
            <ul className="text-sm space-y-2 list-disc  px-4 md:px-0">
              <li>
                Met with Programme participants to better understand needs and
                offer personalized support.
              </li>
              <li>
                Provided physical and emotional support to elderly residents,
                improving community integration and quality of life.
              </li>
              <li>
                Engaged with customers to build loyalty and encourage
                participation.
              </li>
              <li>Designed stall to attract customers.</li>
              <li>Distribution of IEC material.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "11/2021 – 12/2021",
      content: (
        <div>
          <div>
            <div className="mb-4 space-y-1">
              <span className="flex flex-col gap-1 text-3xl font-semibold tracking-wider">
                Asian College for Advance Studies
              </span>
            </div>
            <div className="flex justify-between items-center border-y py-4">
              <div className=" text-gray-700 dark:text-gray-300 tracking-wide flex gap-1 items-center">
                <LocateFixed size={15} />
                <span>Satdobato, Lalitpur</span>
              </div>
              <Badge className="space-x-1">
                <span>Role</span>
                <span>:</span>
                <span>Intern</span>
              </Badge>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg mb-4 font-medium tracking-wide">
              Responsibilities
            </h3>
            <ul className="text-sm space-y-2 list-disc  px-4 md:px-0">
              <li>Oversaw POSDCoRB model of the HO.</li>
              <li>
                Resolved team conflicts and assisted with identified problems to
                maintain sense of teamwork.
              </li>
              <li>Prepared a five year plan in NCD.</li>
              <li>Got familiar with DIHS-2 software and e-LMIS v2 software.</li>
              <li>Created and submitted overall reports to college and HO.</li>
              <li>Conducted epidemiological studies in Covid-19.</li>
              <li>Conducted mini-action project in logistics.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "12/2019 – 12/2019",
      content: (
        <div>
          <div>
            <div className="mb-4 space-y-1">
              <span className="flex flex-col gap-1 text-3xl font-semibold tracking-wider">
                Asian College for Advance Studies
              </span>
            </div>
            <div className="flex justify-between items-center border-y py-4">
              <div className=" text-gray-700 dark:text-gray-300 tracking-wide flex gap-1 items-center">
                <LocateFixed size={15} />
                <span>Satdobato, Lalitpur</span>
              </div>
              <Badge className="space-x-1">
                <span>Role</span>
                <span>:</span>
                <span>Intern</span>
              </Badge>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg mb-4 font-medium tracking-wide">
              Responsibilities
            </h3>
            <ul className="text-sm space-y-2 list-disc  px-4 md:px-0">
              <li>
                Conducted the survey with all the health related indicators
                including geriatrics.
              </li>
              <li>
                Entered data in MS Excel and combined and performed descriptive
                analysis.
              </li>
              <li>
                Conducted FGD to address the mother-related problems of the
                community.
              </li>
              <li>
                Presented the findings in front of the community and ward
                sachieve.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={experienceData} />;
}
