import React from "react";
import { Separator } from "./ui/separator";
import { MdDoubleArrow } from "react-icons/md";

interface ExperienceItemProps {
  id: number;
  period: string;
  organization: string;
  location: string;
  role: string;
  responsibilities: string[];
}

const ExperienceTimelineItem = ({ item }: { item: ExperienceItemProps }) => {
  const { period, organization, location, role, responsibilities } = item;

  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div
        className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 
    before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
    after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-900 after:border-4 after:box-content after:border-slate-50 
    after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
      >
        <time
          className="sm:absolute -left-10 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase p-1 w-32 mb-3 
        sm:mb-0 bg-gray-600 rounded-full"
        >
          {period}
        </time>
        <div>
          <div className="flex items-center gap-2 text-secondary-foreground text-2xl font-semibold">
            <span>{organization}</span>
            <Separator
              orientation="vertical"
              className="border border-slate-100 h-4"
            />
            <span>{location}</span>
          </div>

          <p className="mt-4 text-slate-300 font-semibold">
            <span>Role: </span>
            <span>{role}</span>
          </p>

          <ul className="mt-4 space-y-4 list-decimal ml-4 text-sm text-slate-100">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface ExperienceProps {
  experienceData: ExperienceItemProps[];
}

const ExperienceTimeline = ({ experienceData }: ExperienceProps) => {
  return (
    <div className="flex flex-col justify-center">
      {experienceData.map((item) => (
        <ExperienceTimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
