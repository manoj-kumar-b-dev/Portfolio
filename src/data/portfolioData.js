import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiVercel, SiRender } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

import profileImg from '../assets/profileImg.png';
import vizoraImg from '../assets/vizora.png';
import reqforgeImg from '../assets/reqforge.png';
import shopflowImg from '../assets/shopflow.png';
import resumePdf from '../assets/resume.pdf';

export const portfolioData = {
  hero: {
    name: "Manoj Kumar",
    title: "Full Stack Developer",
    tagline: "Full Stack Developer building modern, responsive web applications with React, Node.js, Express.js, MongoDB, and TypeScript.",
    image: profileImg,
    resumeUrl: resumePdf
  },
  about: {
    description: "I'm a Full Stack Developer and BCA graduate specializing in the MERN stack and TypeScript. I build responsive, real-world web applications with a focus on clean code, intuitive user experiences, and scalable solutions. I've built and deployed projects including AI analytics platforms, API development tools, and e-commerce applications."
  },
  skills: {
    frontend: [
      { name: "React", icon: FaReact, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-500 dark:text-gray-300" },
      { name: "REST APIs", icon: TbApi, color: "text-emerald-500" }
    ],
    database: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" }
    ],
    tools: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-black dark:text-white" },
      { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
      { name: "Render", icon: SiRender, color: "text-cyan-500" }
    ]
  },
  projects: [
    {
      title: "Vizora",
      category: "AI Analytics Dashboard",
      description: "An AI-powered analytics dashboard that lets users upload datasets, analyze data, generate meaningful KPIs, and visualize insights through interactive charts and custom dashboards.",
      features: [
        ,
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Recharts", "AI API"],
      liveUrl: "https://vizora-web.vercel.app/",
      githubUrl: "https://github.com/manoj-kumar-b-dev/Vizora",
      // Legacy aliases kept for backward-compatibility
      get demoLink() { return this.liveUrl; },
      get githubLink() { return this.githubUrl; },
      image: vizoraImg,
    },
    {
      title: "ReqForge",
      category: "API Testing Platform",
      description: "A web-based API testing platform that allows developers to import, create, configure, and test APIs from a single interface — with full request inspection and response viewing.",
      features: [
        ,
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://req-forge-app.vercel.app/",
      githubUrl: "https://github.com/manoj-kumar-b-dev/ReqForge",
      get demoLink() { return this.liveUrl; },
      get githubLink() { return this.githubUrl; },
      image: reqforgeImg,
    },
    {
      title: "ShopFlow",
      category: "MERN E-Commerce Platform",
      description: "A full-stack e-commerce platform delivering a complete shopping experience, secure Razorpay payments, and an admin dashboard for managing products and store content.",
      features: [
        ,
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay"],
      liveUrl: "https://shop-flow-app.vercel.app/",
      githubUrl: "https://github.com/manoj-kumar-b-dev/ShopFlow",
      get demoLink() { return this.liveUrl; },
      get githubLink() { return this.githubUrl; },
      image: shopflowImg,
    },
  ],
  experience: [
    {
      role: "Bachelor of Computer Application (BCA)",
      company: "St Francis De Sales College",
      duration: "July 2023 – June 2026",
      bullets: [
        "Built a strong foundation in programming, databases, software engineering, and web development.",
        "Developed full-stack MERN applications through practical projects.",
        "Applied software development concepts to real-world applications."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Prinston Smart Engineers",
      duration: "Sep 2024 – Oct 2024",
      bullets: [
        "Applied statistical analysis to real-world datasets.",
        "Worked with data preprocessing and visualization.",
        "Developed practical understanding of data analysis workflows."
      ]
    }
  ],
  contact: {
    email: "manojkumarb.2305@gmail.com",
    github: "https://github.com/manoj-kumar-b-dev/",
    linkedin: "https://www.linkedin.com/in/manoj-kumar-4981873b2/"
  }
};
