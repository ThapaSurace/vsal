import {
  FileText,
  Table,
  PenTool,
  BarChart,
  Layout,
  Calculator,
  Users,
  ClipboardList,
  Bike,
} from "lucide-react";

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
  {
    id: 8,
    name: "SPSS, Epidata, Kobo Toolbox, Google Forms",
    icon: ClipboardList,
  },
  {
    id: 9,
    name: "Driving (Two Wheelers Only)",
    icon: Bike,
  },
];

export default function SkillLists() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="border border-gray-200 py-2 px-4 rounded-lg space-y-4 flex gap-4 items-center 
      hover:shadow-lg hover:scale-105 hover:bg-slate-800 transition-all duration-200 ease-in-out 
      cursor-pointer"
        >
          <skill.icon className="text-primary" size={40} />
          <p className="text-muted-foreground font-medium text-sm">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );
}
