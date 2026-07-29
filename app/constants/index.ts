import React from 'react';
import { 
  Layout, 
  Terminal, 
  Database, 
  Code,
  Braces,
  ArrowUp,
  Paintbrush,
  Globe,
  Server,
  Coffee,
  Gem,
  GitBranch,
  Cloud,
  Layers,
  GitPullRequest,
  Box,
  Workflow,
  Container,
  Laptop,
  Smartphone,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Figma,
  Type
} from "lucide-react";
import { Project, SkillCategory, Experience } from '@/app/types';

export const ACCENT_COLOR = "#6EE7B7";
export const BG_COLOR = "#050B14";
export const TEXT_COLOR = "#FFFFFF";

export const skillCategories: SkillCategory[] = [
  { 
    title: "Frontend", 
    icon: React.createElement(Layout),
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Design responsive", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "React.js", level: 75 },
      { name: "Next.js", level: 65 },
      { name: "Vue.js", level: 70 },
      { name: "Angular", level: 60 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Vite", level: 70 },
    ] 
  },
  { 
    title: "Backend", 
    icon: React.createElement(Server),
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 75 },
      { name: "Java", level: 70 },
      { name: "Spring Boot", level: 70 },
      { name: "Python", level: 85 },
      { name: "API REST", level: 80 },
    ] 
  },
  { 
    title: "Databases", 
    icon: React.createElement(Database),
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 70 },
      { name: "Supabase", level: 60 },
      { name: "Firebase", level: 50 },
    ] 
  },
  { 
    title: "Mobile", 
    icon: React.createElement(Smartphone),
    skills: [
      { name: "Flutter", level: 60 },
      { name: "React Native", level: 40 },
    ] 
  },
  { 
    title: "DevOps & Tools", 
    icon: React.createElement(Cloud),
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Git Bash", level: 70 },
      { name: "Postman", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Vercel", level: 70 },
      { name: "Netlify", level: 65 },
      { name: "Render", level: 50 },
    ] 
  },
];

export const projects: Project[] = [
  { 
    id: 1, 
    title: "Aura Privée", 
    category: "Fullstack", 
    desc: "Aura Privé is an online boutique for high-end furniture and interior decoration, offering an exclusive collection of modern furniture combining absolute comfort and timeless design.", 
    image: "/Image3.jpg", 
    tags: ["React", "Tailwind", "Framer Motion", "Node.js", "Express", "PostgreSQL", "Vercel", "Render", "GitHub"], 
    demo: "https://auraprivefrontend.vercel.app/" 
  },
  { 
    id: 2, 
    title: "Parent Malagasy", 
    category: "Frontend", 
    desc: "Parent Malagasy is a web-based parental monitoring application that allows parents to manage the health, growth, and development of their children from 0 to 12 years old. It offers personalized tracking with growth charts, a vaccination schedule, a budget calculator, and age-appropriate advice.", 
    image: "/parentmalagasy.jpg", 
    tags: ["Vue.js", "Tailwind", "Framer Motion", "Chart.js", "LocalStorage", "GitHub", "Netlify"], 
    demo: "https://parentmalagasy.netlify.app" 
  },
  { 
    id: 3, 
    title: "ExamPrep",
    category: "Mobile",
    desc: "ExamPrep is a multi-platform mobile exam preparation application that centralizes review sheets, timed tests and progress tracking for EMIT Fianarantsoa students and teachers.", 
    image: "/ExamPrep1.png", 
    tags: ["Flutter", "Dart", "Supabase", "GitHub"], 
    demo: "https://examprep-ie6gt2y9x-genitahrazafindrasoa-2926s-projects.vercel.app/" 
  }
];

// ============ EXPÉRIENCES ============
export const experiences: Experience[] = [
  // 2026
  {
    id: 4,
    title: "Linux Training",
    company: "Training Center",
    location: "Fianarantsoa, Madagascar",
    period: "May 2026",
    duration: "1 month",
    type: "Formation",
    description: "In-depth training on Linux environment, covering system administration, command line, bash scripting, and server management.",
    technologies: ["Linux", "Bash", "Shell Scripting", "System Administration"],
    icon: React.createElement(Terminal),
    achievements: [
      "Mastery of Linux command line",
      "Bash script writing",
      "Linux server administration",
      "Service configuration and management"
    ]
  },
  
  // 2025
  {
    id: 3,
    title: "English Language Training",
    company: "ITTI Mahajanga",
    location: "Mahajanga, Madagascar",
    period: "November 2025 - January 2026",
    duration: "3 months",
    type: "Formation",
    description: "Professional and technical English training at ITTI Mahajanga, focusing on communication, technical writing, and specialized IT vocabulary.",
    technologies: ["English", "Communication", "Business English", "Technical English"],
    icon: React.createElement(GraduationCap),
    achievements: [
      "Improved English communication skills",
      "Mastery of technical and professional English",
      "Ability to write technical documents in English",
      "Preparation for international certifications"
    ]
  },
  {
    id: 1,
    title: "Pharmaceutical Stock & Sales Management Internship",
    company: "University Center of Fianarantsoa",
    location: "Fianarantsoa, Madagascar",
    period: "June 16, 2025 - August 16, 2025",
    duration: "2 months",
    type: "Stage",
    description: "Development of a pharmaceutical stock and sales management system to track product inflows and outflows, manage orders, and optimize inventory.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS", "Bootstrap"],
    icon: React.createElement(Briefcase),
    achievements: [
      "Design and development of an intuitive user interface with Vue.js",
      "Implementation of a RESTful API with Laravel",
      "Data management with MySQL",
      "Performance and security optimization"
    ]
  },
  {
    id: 2,
    title: "Student Management Application",
    company: "Freelance Mission",
    location: "Fianarantsoa, Madagascar",
    period: "September 2025",
    duration: "1 month",
    type: "Mission",
    description: "Development of a student management application with C# WinForm, enabling management of registrations, grades, and attendance.",
    technologies: ["C#", "WinForm", "SQL Server", ".NET Framework"],
    icon: React.createElement(Code),
    achievements: [
      "Development of a WinForm user interface",
      "Management of students, courses, and grades",
      "Report and statistics generation",
      "SQL Server for data persistence"
    ]
  },

  // 2024
  {
    id: 7,
    title: "Pix Digital Certification",
    company: "Pix",
    location: "Online",
    period: "February 2024",
    duration: "-",
    type: "Certification",
    description: "Obtaining the Pix certification, validating digital skills in various domains.",
    technologies: ["Digital Skills", "Pix"],
    icon: React.createElement(Award),
    achievements: [
      "Validation of Pix digital skills",
      "Official certification obtained",
      "Skills in information processing and communication"
    ]
  },

  // 2022
  {
    id: 5,
    title: "DELF B2 Diploma",
    company: "Alliance Française Mahajanga",
    location: "Mahajanga, Madagascar",
    period: "September 2022",
    duration: "-",
    type: "Certification",
    description: "Obtaining the Diplôme d'Études en Langue Française (DELF) level B2, certifying an advanced level of French language proficiency.",
    technologies: ["French", "Comprehension", "Expression", "Communication"],
    icon: React.createElement(Award),
    achievements: [
      "Official DELF B2 certification from Alliance Française",
      "Oral and written comprehension skills",
      "Oral and written expression in French",
      "Advanced level of French language mastery"
    ]
  },

  // 2018
  {
    id: 6,
    title: "English & French Certificate",
    company: "Training Center",
    location: "Madagascar",
    period: "August - September 2018",
    duration: "2 months",
    type: "Certification",
    description: "Certificate in English and French, attesting to linguistic competencies in both languages.",
    technologies: ["English", "French", "Bilingual"],
    icon: React.createElement(Award),
    achievements: [
      "English and French language certification",
      "Bilingual communication skills",
      "Mastery of both official languages"
    ]
  }
];