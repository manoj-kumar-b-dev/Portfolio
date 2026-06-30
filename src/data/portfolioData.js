import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

export const portfolioData = {
  hero: {
    name: "Manoj Kumar",
    title: "Full Stack Developer",
    tagline: "I'm a passionate MERN Stack Developer skilled in building responsive, full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy writing clean, efficient code, solving real-world problems, and continuously learning new technologies to create scalable and user-friendly applications.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  about: {
    description: "I'm a passionate MERN Stack Developer skilled in building responsive, full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy writing clean, efficient code, solving real-world problems, and continuously learning new technologies to create scalable and user-friendly applications."
  },
  skills: {
    frontend: [
      { name: "React", icon: FaReact, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-500" }
    ],
    database: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
    tools: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHUb", icon: FaGithub, color: "text-black dark:text-white" }
    ]
  },
  projects: [
    {
      title: "ShopFlow",
      description: "ShopFlow is a full-stack MERN e-commerce application featuring secure authentication, product browsing, cart and wishlist management, Razorpay payment integration, and an admin dashboard for managing products, users, and orders. Built with a responsive design for a seamless shopping experience across all devices.",
      techStack: ["React, MongoDB, Express js, Tailwind CSS"],
      demoLink: "https://shop-flow-23.vercel.app/",
      githubLink: "https://github.com/manoj-kumar-b-dev/Ecommerce-Website",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ],
  experience: [
    {
      role: "Bachelor of Computer Application",
      company: "St Fransis De Sales College",
      duration: "July 2023 - June 2026",
      description: " Completed a Bachelor of Computer Applications (BCA) with a strong foundation in programming, database management, software engineering, web development, and computer networks. Gained hands-on experience by building full-stack MERN applications and applying software development concepts to real-world projects."
    },
    {
      role: "Data Science",
      company: "Prinston Smart Engineers.",
      duration: "Sep 2024 - Oct 2024",
      description: "Data Science Intern – Applied statistical analysis and machine learning to large datasets, building predictive models with Python, Pandas, and Scikit‑learn. Created Power BI dashboards to visualize trends and collaborated with teams to turn insights into actionable strategies."
    }

  ],
  contact: {
    email: "manojkumarb.2305@gmail.com",
    github: "https://github.com/manoj-kumar-b-dev/",
    linkedin: "https://www.linkedin.com/in/manoj-kumar-4981873b2/"
  }
};
