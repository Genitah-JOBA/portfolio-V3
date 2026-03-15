"use client";

import Image from "next/image";
import { IconDownload, IconGauge } from '@tabler/icons-react';
import { Sparkle, Strategy, Handshake } from "@phosphor-icons/react";
import { Cpu } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  IconBrandReact, IconBrandNextjs, IconBrandTailwind, 
  IconBrandNodejs, IconBrandMysql, IconBrandDocker, 
  IconBrandFigma, IconBrandGithub, IconExternalLink, 
  IconX, IconBrandHtml5, IconBrandCss3, IconBrandJavascript,
  IconBrandVue, IconBrandLaravel, IconBrandPython,
  IconBrandVercel, IconCoffee, IconBrandCSharp
} from '@tabler/icons-react';
import { 
  FileCode2, Code, Database, Terminal, Layout, 
  SquareTerminal 
} from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

// Interface pour les props du composant ProjectCard
interface ProjectCardProps {
  project: Project;
  // Ajoutez d'autres props si nécessaire
}

// ================= COMPOSANT PARTICULE =================
const ParticleCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBroken, setIsBroken] = useState(false);

  // Création des particules avec des positions aléatoires
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 200,
    y: (Math.random() - 0.5) * 200,
    rotate: Math.random() * 360,
    scale: 0.3 + Math.random() * 0.7,
    delay: i * 0.02,
  }));

  return (
    <motion.div
      onHoverStart={() => setIsBroken(true)}
      onHoverEnd={() => setIsBroken(false)}
      className="relative cursor-pointer"
      style={{ minHeight: "150px" }}
    >
      <AnimatePresence mode="wait">
        {!isBroken ? (
          // État normal - la carte est entière
          <motion.div
            key="normal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-xl bg-[#68A042] dark:bg-[#244539] shadow-md hover:shadow-xl transition-shadow"
          >
            {children}
          </motion.div>
        ) : (
          // État brisé - les particules s'envolent
          particles.map((particle, index) => (
            <motion.div
              key={particle.id}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              animate={{
                x: particle.x,
                y: particle.y,
                opacity: 0,
                rotate: particle.rotate,
                scale: particle.scale,
              }}
              exit={{
                x: 0,
                y: 0,
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: particle.delay,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0 p-6 rounded-xl bg-[#68A042] dark:bg-[#244539] shadow-md"
              style={{
                transformOrigin: "center center",
                zIndex: 20 - index,
              }}
            >
              {children}
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ================= DONNÉES =================
const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-[#21D375]" />,
    skills: [
      { name: "HTML", level: 90, icon: <IconBrandHtml5 size={18} /> },
      { name: "CSS", level: 85, icon: <IconBrandCss3 size={18} /> },
      { name: "JavaScript", level: 80, icon: <IconBrandJavascript size={18} /> },
      { name: "React", level: 40, icon: <IconBrandReact size={18} /> },
      { name: "Next.js", level: 60, icon: <IconBrandNextjs size={18} /> },
      { name: "Tailwind", level: 80, icon: <IconBrandTailwind size={18} /> },
      { name: "Vue.js", level: 70, icon: <IconBrandVue size={18} /> },
    ],
  },
  {
    title: "Backend",
    icon: <Terminal className="text-[#21D375]" />,
    skills: [
      { name: "Node.js", level: 50, icon: <IconBrandNodejs size={18} /> },
      { name: "Laravel", level: 75, icon: <IconBrandLaravel size={18} /> },
      { name: "Java", level: 70, icon: <IconCoffee size={18} /> },
      { name: "Python", level: 85, icon: <IconBrandPython size={18} /> },
      { name: "C#", level: 75, icon: <IconBrandCSharp size={20} stroke={2} className="text-[#21D375]" /> },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="text-[#21D375]" />,
    skills: [
      { name: "MySQL", level: 90, icon: <IconBrandMysql size={18} /> },
      { name: "PostgreSQL", level: 40, icon: <Database size={18} /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Code className="text-[#21D375]" />,
    skills: [
      { name: "GitHub", level: 85, icon: <IconBrandGithub size={18} /> },
      { name: "Git Bash", level: 70, icon: <SquareTerminal size={18} /> },
      { name: "Vercel", level: 50, icon: <IconBrandVercel size={18} /> },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "E-commerce App",
    category: "Fullstack",
    desc: "Complete platform with payment gateway and auth.",
    image: "/Image1.png",
    tags: ["Next.js", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Management Dashboard",
    category: "Backend",
    desc: "Internal tool with analytics and user roles.",
    image: "/Image7.png",
    tags: ["React", "Spring Boot", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Modern Portfolio",
    category: "Frontend",
    desc: "Pixel-perfect portfolio with Framer Motion.",
    image: "/Image2.jpg",
    tags: ["Next.js", "Tailwind", "Framer"],
    github: "#",
    demo: "#"
  }
];

// ================= COMPOSANT PRINCIPAL =================
export default function Home() {
  const [filter, setFilter] = useState("All");
  interface Project {
    id: number;
    title: string;
    category: string;
    desc: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
  }

  // Ensuite, typage correct du state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main>
      {/* SECTION ACCEUIL */}
      <section
        id="Acceuil"
        className="min-h-screen py-12 md:py-20 flex items-center justify-center px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-6xl md:text-5xl font-bold mb-6 leading-tight">
              Hello, I'm 
              <span 
                className="text-[#21D375]"
                style={{ fontFamily: 'Cooper' }}
              > JOBA Razafindrasoa Genitah</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Junior Fullstack Developer
            </h2>

            <p className="text-black dark:text-white mb-6">
              I design and develop modern, high-performance and secure web applications 
              using technologies such as Next.js, React, Node.js, Python, PHP, Laravel, Java and C#.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="text-[#244539] flex items-center gap-2 border border-[#21D375] dark:text-[#21D375] px-6 py-3 rounded-lg hover:bg-[#244539] hover:text-white transition group">
                <span>View my projects</span>
                <Sparkle size={22} weight="duotone" className="group-hover:rotate-3 transition-transform" />
              </a>

              <a
                href="/cv.pdf"
                download="Mon_CV.pdf"
                className="text-[#244539] flex items-center gap-1 border border-[#21D375] dark:text-[#21D375] px-6 py-3 rounded-lg hover:bg-[#244539] hover:text-white transition"
              >
                <IconDownload size={22} className="group-hover:translate-y-1 transition-transform" />
                <span>Download CV </span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <Image
                src="/Images.jpg"
                alt="Photo JOBA"
                loading="lazy"
                fill
                className="object-cover rounded-full shadow-2xl border-4 border-[#21D375]"
              />

              <motion.div
                animate={{ 
                  x: [0, 5, -5, 0],
                  y: [0, -8, 8, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0,
                  backgroundColor: "#244539"
                }}
                className="absolute bottom-6 -right-8 md:bottom-10 md:-right-12 
                          bg-[#21D375] text-white px-4 py-2 rounded-full 
                          shadow-[0_10px_20px_rgba(33,211,117,0.3)] 
                          border-2 border-white dark:border-gray-900 
                          flex items-center gap-2 cursor-default z-30"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></span>
                
                <span 
                  className="text-sm md:text-base font-bold tracking-widest whitespace-nowrap"
                  style={{ fontFamily: 'Cooper' }}
                >
                  &lt; DEVELOPER / &gt;
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separations */}
      <div className="relative flex items-center justify-center my-1 md:my-2 px-6">
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-[#21D375]/40 to-transparent"></div>
        <div className="absolute flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black dark:bg-[#21D375] shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_#21D375]"></div>
          <div className="absolute w-5 h-5 rounded-full border border-black/30 dark:border-[#21D375]/50 animate-ping"></div>
        </div>
      </div>

      {/* SECTION ABOUT */}
      <section id="about" className="flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ABOUT
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                As a passionate freelance Fullstack developer, I design modern, 
                robust, and scalable web applications.
                My goal is to transform ideas into high-performing and intuitive digital products.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I work with a technologies such as React, Next.js,
                Node.js, Python, PHP, Laravel, Java and C#, with an emphasis on code quality,
                user experience and performance.
              </p>
            </div>

            {/* Blocs valeurs avec effet particule */}
            <div className="space-y-6">
              <ParticleCard>
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-2 text-white dark:text-[#21D375]">
                  <Cpu size={24} className="text-white dark:text-[#21D375]" />
                  Expertise technique
                </h3>
                <p className="text-white/90 dark:text-gray-300">
                  Développement full-stack avec une architecture propre, maintenable et évolutive.
                </p>
              </ParticleCard>

              <div className="p-6 rounded-xl bg-[#68A042] dark:bg-[#244539] shadow-md hover:shadow-xl transition group">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-2 text-white dark:text-[#21D375]">
                  <IconGauge size={24} stroke={1.5} className="text-white dark:text-[#21D375]" />
                  Performance
                </h3>
                <p className="text-white/90 dark:text-gray-300">
                  Fast, SEO-optimized applications adapted to modern web standards.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#68A042] dark:bg-[#244539] shadow-md hover:shadow-xl transition group">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-2 text-white dark:text-[#21D375]">
                  <Handshake size={26} weight="duotone" className="group-hover:-rotate-12 transition-transform duration-300" />
                  Collaboration
                </h3>
                <p className="text-white/90 dark:text-gray-300">
                  Clear communication, understanding of needs, and strategic support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres séparations et sections... (gardez le reste de votre code ici) */}
      
      {/* SECTION SKILLS */}
      <div className="relative flex items-center justify-center my-6 md:my-8 px-6">
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-[#21D375]/40 to-transparent"></div>
        <div className="absolute flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black dark:bg-[#21D375] shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_#21D375]"></div>
          <div className="absolute w-5 h-5 rounded-full border border-black/30 dark:border-[#21D375]/50 animate-ping"></div>
        </div>
      </div>

      <section id="skills" className="py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            TECHNICAL SKILLS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-[#68A042] dark:bg-[#244539] shadow-xl border border-gray-100 dark:border-white/5 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#21D375]/10 rounded-xl">{cat.icon}</div>
                  <h3 className="text-xl font-bold dark:text-white">{cat.title}</h3>
                </div>

                <div className="space-y-5 flex-grow">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="flex items-center gap-2 text-sm font-medium text-white dark:text-gray-300">
                          {skill.icon} {skill.name}
                        </span>
                        <span className="text-xs text-[#21D375] font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 dark:bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-[#21D375] shadow-[0_0_10px_#21D375]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-50 dark:border-white/5 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#21D375] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#21D375]"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white dark:text-gray-400 font-bold">
                    Active Learning
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION PROJECTS */}
      <div className="relative flex items-center justify-center my-6 md:my-8 px-6">
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-[#21D375]/40 to-transparent"></div>
        <div className="absolute flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black dark:bg-[#21D375] shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_#21D375]"></div>
          <div className="absolute w-5 h-5 rounded-full border border-black/30 dark:border-[#21D375]/50 animate-ping"></div>
        </div>
      </div>

      <section id="projects" className="py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 uppercase tracking-widest">Projects</h2>

          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {["All", "Frontend", "Backend", "Fullstack"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all border ${
                  filter === cat 
                  ? "bg-[#21D375] border-[#21D375] text-white" 
                  : "border-gray-300 dark:border-white/10 hover:border-[#21D375]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  className="group relative bg-white dark:bg-[#244539] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#21D375]/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-xl">View Details</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold text-[#21D375]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="relative bg-white dark:bg-[#1e2d3b] max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl z-[101]"
                >
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="absolute top-4 right-4 p-2 bg-black/10 rounded-full hover:bg-black/20"
                  >
                    <IconX size={20}/>
                  </button>
                  <div className="h-64 relative">
                    <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.desc}</p>
                    <div className="flex gap-4">
                      <a href={selectedProject.github} className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                        <IconBrandGithub size={20}/> Code
                      </a>
                      <a href={selectedProject.demo} className="flex items-center gap-2 bg-[#21D375] text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
                        <IconExternalLink size={20}/> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}