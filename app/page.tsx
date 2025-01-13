import About from "@/components/About";
import Home from "@/components/Home";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/ui/timeline";

export default function page() {
  const experienceData = [
    {
      title: "04/2022 – 06/2022",
      content: (
        <div>
          <div className="flex items-center gap-4 text-2xl font-semibold mb-2">
            <span>ENPHO</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Lalitpur</span>
          </div>
          <p className="text-slate-300">
            <span>role: </span>
            <span>volunteer</span>
          </p>
          <div className="mt-6">
            <h3 className="text-lg mb-2">Responsibilities</h3>
            <ul className="text-sm space-y-2 list-disc">
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
          <div className="flex items-center gap-4 text-2xl font-semibold mb-2">
            <span>NIHE</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Pashupati</span>
          </div>
          <p className="text-slate-300">
            <span>role: </span>
            <span>Data Collector</span>
          </p>
          <div className="mt-6">
            <h3 className="text-lg mb-2">Responsibilities</h3>
            <ul className="text-sm space-y-2 list-disc">
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
          <div className="flex items-center gap-4 text-2xl font-semibold mb-2">
            <span>ENPHO</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Bhaktapur</span>
          </div>
          <p className="text-slate-300">
            <span>role: </span>
            <span>Volunteer</span>
          </p>
          <div className="mt-6">
            <h3 className="text-lg mb-2">Responsibilities</h3>
            <ul className="text-sm space-y-2 list-disc">
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
          <div className="flex items-center gap-4 text-2xl font-semibold mb-2">
            <span>Asian College for Advance Studies</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Satdobato, Lalitpur</span>
          </div>
          <p className="text-slate-300">
            <span>role: </span>
            <span>Intern</span>
          </p>
          <div className="mt-6">
            <h3 className="text-lg mb-2">Responsibilities</h3>
            <ul className="text-sm space-y-2 list-disc">
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
          <div className="flex items-center gap-4 text-2xl font-semibold mb-2">
            <span>Asian College for Advance Studies</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Satdobato, Lalitpur</span>
          </div>
          <p className="text-slate-300">
            <span>role: </span>
            <span>Intern</span>
          </p>
          <div className="mt-6">
            <h3 className="text-lg mb-2">Responsibilities</h3>
            <ul className="text-sm space-y-2 list-disc">
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
          Experience
        </h1>
        <h2 className="scroll-m-20 text-2xl font-semibold mb-4 tracking-wider">
          Work History
        </h2>
        <Timeline data={experienceData} />
      </section>
    </div>
  );
}
