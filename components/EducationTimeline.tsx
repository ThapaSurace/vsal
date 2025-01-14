import { Badge } from "./ui/badge";

interface EducationItemProps {
  label: string;
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({
  label,
  date,
  title,
  description,
}: EducationItemProps) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Purple label */}

      {/* Vertical line, Date, Title, and Circle marker */}
      <div
        className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 
      before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
      after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-slate-900 after:border-4 after:box-content after:border-slate-50 
      after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
      >
        <Badge
          className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 
        sm:mb-0 rounded-full"
        >
          {date}
        </Badge>
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-light text-sm">{label}</span>
            <h3 className="text-2xl font-semibold text-secondary-foreground mb-1">
              {title}
            </h3>
          </div>
          {/* Content */}
          <p className="text-secondary-foreground text-sm tracking-wider leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

interface EducationProps {
  educationData: EducationItemProps[];
}

const Timeline = ({ educationData }: EducationProps) => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="">
        <div className="-my-6">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              label={item.label}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
