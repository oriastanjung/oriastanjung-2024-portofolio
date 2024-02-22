export type ProjectItemType = {
  title: string;
  tech: string[];
  url?: string;
  github: string;
  image: string;
};

export const ProjectsList: ProjectItemType[] = [
  {
    title: "SORE - Pixelcrafters",
    tech: ["ExpressJS", "MongoDB", "ReactJS"],
    url: "https://sore-pixelcrafters.vercel.app/",
    github: "https://github.com/oriastanjung",
    image: "/sore-pixelcrafters.png",
  },
  {
    title: "Seeker Job",
    tech: ["NextJS", "Prisma.io", "PostgreSQL"],
    url: "https://seeker-job.vercel.app/",
    github: "https://github.com/oriastanjung/seeker-job",
    image: "/seeker-job.png",
  },
  {
    title: "Shoecraft",
    tech: ["NextJS", "ExpressJS", "MongoDB", "ReactJS"],
    url: "https://shoecraft.vercel.app/",
    github: "https://github.com/oriastanjung",
    image: "/shoecraft.png",
  },

  {
    title: "Alvacation",
    tech: ["ReactJS", "SCSS", "Bootstrap"],
    url: "https://alvacation.vercel.app/",
    github: "https://github.com/oriastanjung/alvacation",
    image: "/alvacation.png",
  },
  {
    title: "Furniture - Modern Landing Page",
    tech: ["ReactJS", "TailwindCSS"],
    url: "https://furniture-landing-page-ori.vercel.app/",
    github: "https://github.com/oriastanjung/furniture-landing-page",
    image: "/furniture-modern.png",
  },
  {
    title: "Ramoena",
    tech: ["NextJS", "TailwindCSS"],
    url: "https://ramoena.vercel.app/",
    github: "https://github.com/oriastanjung/ramoena",
    image: "/ramoena.png",
  },
  {
    title: "Lentera - Landing Page",
    tech: ["NextJS", "TailwindCSS"],
    url: "https://lentera.vercel.app/",
    github: "https://github.com/oriastanjung/Lentera-FE",
    image: "/lentera.png",
  },

  {
    title: "Luxspace - Furniture App",
    tech: ["ReactJS", "TailwindCSS"],
    url: "https://luxspace-bwa-cyan.vercel.app/",
    github: "https://github.com/oriastanjung/luxspace_bwa",
    image: "/luxspace.png",
  },
  {
    title: "SEMINA",
    tech: ["ReactJS", "Bootstrap","NextJS","ExpressJS", "MongoDB"],
    url: "",
    github: "https://github.com/oriastanjung/semina-frontend",
    image: "/semina.png",
  },
];
