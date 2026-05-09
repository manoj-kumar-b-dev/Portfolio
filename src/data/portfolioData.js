import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

export const portfolioData = {
  hero: {
    name: "Manoj Kumar",
    title: "Frontend Developer",
    tagline: "I am a passionate Frontend Developer with experience in building web applications from the ground up using modern technologies. I love solving complex problems, writing clean, reusable code, and creating intuitive user experiences. When I'm not coding, I'm exploring new technologies or contributing to open source.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  about: {
    description: "I am a passionate Frontend Developer with experience in building web applications from the ground up using modern technologies. I love solving complex problems, writing clean, reusable code, and creating intuitive user experiences. When I'm not coding, I'm exploring new technologies or contributing to open source."
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
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with authentication, cart functionality, and Stripe payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Redux"],
      demoLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ],
  experience: [
    {
      role: "Data Science",
      company: "Prinston Smart Engineers.",
      duration: "Sep 2024 - Oct 2024",
      description: "Data Science Intern – Applied statistical analysis and machine learning to large datasets, building predictive models with Python, Pandas, and Scikit‑learn. Created Power BI dashboards to visualize trends and collaborated with teams to turn insights into actionable strategies."
    },
    {
      role: "Data Entry",
      company: "Laser Experts India",
      duration: "Mar 2026 - Apr 2026",
      description: "Assisted in collecting, organizing, and validating data from various sources, ensuring accuracy and completeness. Efficiently entered and managed data in Excel, maintaining structured records for easy analysis and reporting."
    }
  ],
  contact: {
    email: "manojkumarb.2305@gmail.com",
    github: "https://github.com/manoj-kumar-b-dev/",
    linkedin: "https://www.linkedin.com/in/manoj-kumar-4981873b2/"
  }
};
