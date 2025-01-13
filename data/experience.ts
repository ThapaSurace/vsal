interface Experience {
    id: number;
    period: string;
    organization: string;
    location: string;
    role: string;
    responsibilities: string[];
  }
  
  export const experienceData: Experience[] = [
    {
      id: 1,
      period: "04/2022 – 06/2022",
      organization: "ENPHO",
      location: "Lalitpur",
      role: "Volunteer",
      responsibilities: [
        "Planned, prepared and delivered sessions related WASH and CCRM for students of class 7 and 8.",
        "Delivered lessons with enthusiasm and positivity to inspire students about the risk and capacity near their surroundings as well as the quality of water they were drinking.",
        "Used planning skills to facilitate smooth running of the sessions.",
        "Performed narrative analysis to assess and analyze the knowledge of students.",
        "Planned, monitored and supervised the activities like mapping and transect walk.",
        "Delivered fun, safe and educational WASH lessons to groups of students.",
        "Finally prepared a report of overall CCRM."
      ]
    },
    {
      id: 2,
      period: "04/2022 – 04/2022",
      organization: "NIHE",
      location: "Pashupati",
      role: "Data Collector",
      responsibilities: [
        "Conducted surveys and documented all responses.",
        "Collected waste related information at Pashupati area.",
        "Compiled and analyzed data using Microsoft Excel and Access.",
        "Managed daily assignment schedule in an efficient and accurate manner.",
        "Made the tool in Kobo Toolbox."
      ]
    },
    {
      id: 3,
      period: "03/2022 – 03/2022",
      organization: "ENPHO",
      location: "Bhaktapur",
      role: "Volunteer",
      responsibilities: [
        "Met with Programme participants to better understand needs and offer personalized support.",
        "Provided physical and emotional support to elderly residents, improving community integration and quality of life.",
        "Engaged with customers to build loyalty and encourage participation.",
        "Designed stall to attract customers.",
        "Distribution of IEC material."
      ]
    },
    {
      id: 4,
      period: "11/2021 – 12/2021",
      organization: "Asian College for Advance Studies",
      location: "Satdobato, Lalitpur",
      role: "Intern",
      responsibilities: [
        "Oversaw POSDCoRB model of the HO.",
        "Resolved team conflicts and assisted with identified problems to maintain sense of teamwork.",
        "Prepared a five year plan in NCD.",
        "Got familiar with DIHS-2 software and e-LMIS v2 software.",
        "Created and submitted overall reports to college and HO.",
        "Conducted epidemiological studies in Covid-19.",
        "Conducted mini-action project in logistics."
      ]
    },
    {
      id: 5,
      period: "12/2019 – 12/2019",
      organization: "Asian College for Advance Studies",
      location: "Satdobato, Lalitpur",
      role: "Intern",
      responsibilities: [
        "Conducted the survey with all the health related indicators including geriatrics.",
        "Entered data in MS Excel and combined and performed descriptive analysis.",
        "Conducted FGD to address the mother-related problems of the community.",
        "Presented the findings in front of the community and ward sachieve."
      ]
    }
  ];
  