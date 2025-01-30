import {
  FileText,
  Table,
  PenTool,
  BarChart,
  Layout,
  Calculator,
  Users,
  ClipboardList,
  Car,
  BarChart3,
  Book,
  Globe,
  Database,
  Network,
  ChartLine,
} from "lucide-react";
import FadeInOut from "./animation/FadeInOut";

export const skills = [
  {
    id: 1,
    name: "Microsoft Office (Word, Excel, PowerPoint)",
    icon: FileText,
  },
  {
    id: 2,
    name: "Data Entry",
    icon: Table,
  },
  {
    id: 3,
    name: "Technical Writing",
    icon: PenTool,
  },
  {
    id: 4,
    name: "Data Analysis",
    icon: BarChart,
  },
  {
    id: 5,
    name: "Presentation Techniques",
    icon: Layout,
  },
  {
    id: 6,
    name: "Quantitative Methodologies",
    icon: Calculator,
  },
  {
    id: 7,
    name: "Interpersonal Ability",
    icon: Users,
  },
  // {
  //   id: 8,
  //   name: "SPSS, Epidata, Kobo Toolbox, Google Forms",
  //   icon: ClipboardList,
  // },
  {
    id: 9,
    name: "Driving (Both two wheeler and four wheeler)",
    icon: Car,
  },
  {
    id: 10,
    name: "SPSS",
    icon: BarChart3,
  },
  {
    id: 11,
    name: "NVivo",
    icon: Book,
  },
  {
    id: 12,
    name: "ArcGIS Pro",
    icon: Globe,
  },
  {
    id: 13,
    name: "Epidata 4.6",
    icon: Database,
  },
  {
    id: 14,
    name: "Kobo Toolbox",
    icon: ClipboardList,
  },
  {
    id: 15,
    name: "MS Office",
    icon: FileText,
  },
  {
    id: 16,
    name: "Vos Viewer",
    icon: Network,
  },
  {
    id: 17,
    name: "R Studio",
    icon: ChartLine,
  },
];

export default function SkillLists() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="border border-gray-200 py-2 px-4 rounded-lg space-y-4 flex gap-4 items-center 
      hover:shadow-lg hover:scale-105 hover:bg-slate-100 transition-all duration-200 ease-in-out 
      cursor-pointer dark:hover:bg-slate-700"
        >
          <skill.icon className="text-primary" size={40} />
          <p className="text-muted-foreground font-medium text-sm tracking-wide">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );
}
