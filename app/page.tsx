"use client";

import Footer from './components/Footer';
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { IconDownload, IconGauge } from '@tabler/icons-react';
import { Sparkle, Strategy, Handshake } from "@phosphor-icons/react";
import { Cpu,Code2 } from 'lucide-react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Server, Cloud, Rocket } from 'lucide-react';
import { 
  IconBrandReact, IconBrandNextjs, IconBrandTailwind, 
  IconBrandNodejs, IconBrandMysql, IconBrandDocker, 
  IconBrandFigma, IconBrandGithub, IconExternalLink, 
  IconX, IconBrandHtml5, IconBrandCss3, IconBrandJavascript,
  IconBrandVue, IconBrandLaravel, IconBrandPython,
  IconBrandVercel, IconCoffee, IconBrandCSharp,
  IconBrandSupabase, IconBrandVscode,
  IconBrandNetbeans, IconGitBranch, IconTerminal2, 
  IconDatabase, IconCode, IconFileCode, IconBrandGit,
  IconBrandAndroid,
} from '@tabler/icons-react';
import { 
  FileCode2, Code, Database, Terminal, Layout, 
  SquareTerminal 
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
  demo: string;
}

type MessageType = 'success' | 'error' | 'info' | 'warning' | '';

interface MessageBoxState {
  show: boolean;
  type: MessageType;
  message: string;
}

interface MessageBoxProps {
  message: string;
  type: MessageType;
  onClose: () => void;
  dark?: boolean;
  duration?: number;
}

// ================= MESSAGE BOX OPTIMISÉ =================
const MessageBox = ({ message, type, onClose, dark = false, duration = 5000 }: MessageBoxProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const getBgColor = () => {
    switch(type) {
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      case 'info': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-24 right-6 z-[100] max-w-md p-4 rounded-xl shadow-2xl border backdrop-blur-md
        ${type === 'success' 
          ? dark 
            ? 'bg-[#244539] border-[#21D375]' 
            : 'bg-white border-[#A2CA6C]'
          : dark
            ? 'bg-red-900/90 border-red-500'
            : 'bg-red-50 border-red-500'
        }`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-full ${type === 'success' ? dark ? 'bg-[#21D375]/20' : 'bg-[#A2CA6C]/20' : 'bg-red-500/20'}`}>
          {type === 'success' ? (
            <svg className={`w-5 h-5 ${dark ? 'text-[#21D375]' : 'text-[#A2CA6C]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <h3 className={`font-semibold mb-1 ${type === 'success' ? dark ? 'text-[#21D375]' : 'text-[#A2CA6C]' : 'text-red-500'}`}>
            {type === 'success' ? 'Succès !' : 'Erreur !'}
          </h3>
          <p className={`text-sm ${dark ? 'text-white/80' : 'text-slate-700'}`}>{message}</p>
        </div>

        <button onClick={onClose} className="p-1 rounded-full hover:bg-black/10 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <motion.div
        className={`absolute bottom-0 left-0 h-1 rounded-b-xl ${type === 'success' ? dark ? 'bg-[#21D375]' : 'bg-[#A2CA6C]' : 'bg-red-500'}`}
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: duration / 1000, ease: "linear" }}
      />
    </motion.div>
  );
};

// ================= PARTICULES OPTIMISÉES =================
const Particles = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Réduire le nombre de particules pour améliorer les performances
  const particles = useMemo(() => Array(12).fill(null), []);

  return (
    <>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#21D375] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 60],
            y: [0, (Math.random() - 0.5) * 60],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// ================= PARTICULES FIXES OPTIMISÉES =================
const FixedParticles = () => {
  // Réduire le nombre de particules
  const particles = useMemo(() => {
    const items = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        items.push({ row, col });
      }
    }
    return items;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map(({ row, col }) => {
        const baseTop = 15 + row * 25;
        const baseLeft = 15 + col * 25;
        return (
          <motion.div
            key={`${row}-${col}`}
            className="absolute w-1 h-1 bg-[#21D375]/30 rounded-full"
            style={{
              top: `${baseTop}%`,
              left: `${baseLeft}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
              y: [0, -30, -60],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: (row * 3 + col) * 0.2,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );
};

// ================= DONNÉES (inchangées) =================
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
      { name: "Supabase", level: 40, icon: <IconBrandSupabase size={18} /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Code className="text-[#21D375]" />,
    skills: [
      { name: "GitHub", level: 85, icon: <IconBrandGithub size={18} /> },
      { name: "Git", level: 80, icon: <IconBrandGit size={18} /> },
      { name: "Git Bash", level: 70, icon: <IconTerminal2 size={18} /> },
      { name: "Vercel", level: 50, icon: <IconBrandVercel size={18} /> },
      { name: "Render", level: 30, icon: <Server size={18} /> },
    ],
  },
  {
    title: "IDEs & Editors",
    icon: <FileCode2 className="text-[#21D375]" />,
    skills: [
      { name: "VS Code", level: 90, icon: <IconBrandVscode size={18} /> },
      { name: "NetBeans", level: 80, icon: <IconBrandNetbeans size={18} /> },
      { name: "IntelliJ IDEA", level: 60, icon: <IconCode size={18} /> },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "Aura Privée",
    category: "Fullstack",
    desc: "Aura Privé is a modern e-commerce platform dedicated to selling exclusive and elegant products.",
    image: "/Image3.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    demo: "https://auraprivefrontend.vercel.app/"
  },
  {
    id: 2,
    title: "Management Dashboard",
    category: "Backend",
    desc: "Internal tool with analytics and user roles.",
    image: "/Image7.png",
    tags: ["React", "Spring Boot", "MySQL"],
    demo: "#"
  },
  {
    id: 3,
    title: "Modern Portfolio",
    category: "Frontend",
    desc: "Pixel-perfect portfolio with Framer Motion.",
    image: "/Image2.jpg",
    tags: ["Next.js", "Tailwind", "Framer"],
    demo: "#"
  }
];

// ================= COMPOSANT PRINCIPAL OPTIMISÉ =================
export default function Home() {
  const [dark] = useState(true);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [messageBox, setMessageBox] = useState<MessageBoxState>({ show: false, type: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const [inView, setInView] = useState({
    about: false,
    skills: false,
    projects: false,
    contact: false
  });

  // Observer pour les sections avec Intersection Observer (performant)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = ['about', 'skills', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setLoading(true);
    
    try {
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setMessageBox({ show: true, type: 'success', message: 'Message envoyé avec succès !' });
        formRef.current.reset();
      } else {
        setMessageBox({ show: true, type: 'error', message: 'Erreur lors de l\'envoi.' });
      }
    } catch (error) {
      setMessageBox({ show: true, type: 'error', message: 'Erreur lors de l\'envoi.' });
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(project => 
      project.category.toLowerCase().trim() === filter.toLowerCase().trim()
    );
  }, [filter]);

  return (
    <LazyMotion features={domAnimation}>
      <main>
        <AnimatePresence mode="wait">
          {messageBox.show && (
            <MessageBox
              message={messageBox.message}
              type={messageBox.type}
              dark={dark}
              onClose={() => setMessageBox({ show: false, type: '', message: '' })}
            />
          )}
        </AnimatePresence>

        <div className="flex-grow">
          {/* SECTION ACCUEIL - ANIMATIONS SIMPLIFIÉES */}
          <section id="Acceuil" className="py-12 md:py-20 flex items-center justify-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, ${'#21D375'}20 1px, transparent 0)`,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>

            <Particles />

            <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left relative"
              >
                <div className="absolute -top-10 left-0 bg-[#21D375] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <span>✦</span>
                  Available for work
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Hello, I'm 
                  <span className="text-[#21D375] block md:inline-block relative" style={{ fontFamily: 'Cooper' }}>
                    JOBA Razafindrasitohaina Genitah
                  </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                  <span>&lt;</span>
                  Junior Fullstack Developer
                  <span>/&gt;</span>
                </h2>

                <p className="text-black dark:text-white mb-6">
                  I design and develop modern, high-performance and secure web applications 
                  using technologies such as Next.js, React, Node.js, Python, PHP, Laravel, Java and C#.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a 
                    href="#projects" 
                    className="text-[#244539] flex items-center gap-2 border border-[#21D375] dark:text-[#21D375] px-6 py-3 rounded-lg hover:bg-[#244539] hover:text-white transition group"
                  >
                    <span>View my projects</span>
                    <Sparkle size={22} weight="duotone" />
                  </a>

                  <a
                    href="/cv.pdf"
                    download="Mon_CV.pdf"
                    className="text-[#244539] flex items-center gap-2 border border-[#21D375] dark:text-[#21D375] px-6 py-3 rounded-lg hover:bg-[#244539] hover:text-white transition group"
                  >
                    <IconDownload size={22} />
                    <span>Download CV</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center relative"
              >
                <div className="relative w-60 h-60 md:w-80 md:h-80">
                  <div className="absolute -inset-4 rounded-full border-2 border-[#21D375]/30 border-dashed" />
                  
                  <div className="relative w-full h-full">
                    <Image
                      src="/Images.jpg"
                      alt="Photo JOBA"
                      loading="eager"
                      fill
                      className="object-cover rounded-full shadow-2xl border-4 border-[#21D375] relative z-10"
                    />
                  </div>

                  <div className="absolute bottom-6 -right-8 md:bottom-10 md:-right-12 
                                bg-[#21D375] text-white px-4 py-2 rounded-full 
                                shadow-lg border-2 border-white dark:border-gray-900 
                                flex items-center gap-2 cursor-default z-30">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm md:text-base font-bold tracking-widest whitespace-nowrap" style={{ fontFamily: 'Cooper' }}>
                      &lt; DEVELOPER / &gt;
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Séparateur simplifié */}
          <div className="relative flex items-center justify-center my-1 md:my-2 px-6">
            <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-[#21D375]/40 to-transparent" />
          </div>

          {/* SECTION ABOUT - ANIMATIONS UNIQUEMENT QUAND VISIBLE */}
          <section id="about" className="py-20 px-6 overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #A2CA6C 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                  opacity: 0.1
                }}
              />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-bold inline-block relative">ABOUT</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
                  Découvrez mon parcours et ma passion pour le développement
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    As a passionate freelance Fullstack developer, I design modern, robust, and scalable web applications. 
                    My goal is to transform ideas into high-performing and intuitive digital products.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    I work with technologies such as React, Next.js, Node.js, Python, PHP, Laravel, Java and C#, 
                    with an emphasis on code quality, user experience and performance.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Expertise technique */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#A2CA6C] to-[#8BB55C] dark:from-[#244539] dark:to-[#1A3329] shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <Cpu size={32} className="text-black dark:text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                          Expertise technique
                        </h3>
                        <p className="text-black/80 dark:text-white/90">
                          Full-stack development with a clean architecture.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Performance */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#A2CA6C] to-[#8BB55C] dark:from-[#244539] dark:to-[#1A3329] shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <IconGauge size={32} stroke={1.5} className="text-black dark:text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                          Performance
                        </h3>
                        <p className="text-black/80 dark:text-white/90">
                          Fast, SEO-optimized applications.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Collaboration */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#A2CA6C] to-[#8BB55C] dark:from-[#244539] dark:to-[#1A3329] shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <Handshake size={32} weight="duotone" className="text-black dark:text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                          Collaboration
                        </h3>
                        <p className="text-black/80 dark:text-white/90">
                          Clear communication and strategic support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION SKILLS */}
          <div className="relative flex items-center justify-center my-6 md:my-8 px-6">
            <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-[#21D375]/40 to-transparent" />
          </div>

          <section id="skills" className="py-20 px-6 overflow-hidden relative">
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 tracking-wider mb-2 block">
                  • MES COMPÉTENCES •
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                  Créativité & 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400"> Expertise</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="group">
                    <div className="relative h-full bg-white dark:bg-[#244539] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative p-8 pb-6">
                        <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl mb-4">
                          <div className="text-emerald-600 dark:text-emerald-400 text-xl">{cat.icon}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{cat.title}</h3>
                      </div>

                      <div className="relative p-8 pt-0 space-y-4">
                        {cat.skills.map((skill, sIdx) => (
                          <div key={sIdx}>
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                <span className="text-emerald-600 dark:text-emerald-400 text-lg">{skill.icon}</span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                              </div>
                              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION PROJECTS */}
          <div className="relative flex items-center justify-center my-6 md:my-8 px-6">
            <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-[#21D375]/40 to-transparent" />
          </div>

          <section id="projects" className="py-20 px-6 overflow-hidden relative">
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-light tracking-[0.3em]">PROJECTS</h2>
              </div>

              <div className="flex justify-center gap-2 mb-16 flex-wrap">
                {["All", "Frontend", "Backend", "Fullstack"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300
                      ${filter === cat 
                        ? "text-[#21D375] font-medium border-b-2 border-[#21D375]" 
                        : "text-gray-500 hover:text-[#21D375]"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-white dark:bg-[#244539] rounded-2xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-[#21D375] transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-[#21D375] text-white text-xs font-medium rounded-full">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#21D375] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 bg-[#21D375]/10 text-[#21D375] rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal projet simplifié */}
              <AnimatePresence>
                {selectedProject && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div 
                      onClick={() => setSelectedProject(null)}
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative bg-white dark:bg-gray-900 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl z-[101]"
                    >
                      <button 
                        onClick={() => setSelectedProject(null)} 
                        className="absolute top-6 right-6 text-gray-400 hover:text-[#21D375] transition-colors z-10"
                      >
                        <IconX size={20}/>
                      </button>

                      <div className="grid md:grid-cols-2">
                        <div className="relative h-80 md:h-full bg-gray-100 dark:bg-gray-800">
                          <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                        </div>
                        <div className="p-8">
                          <span className="text-xs text-[#21D375] uppercase tracking-wider font-semibold">Projet</span>
                          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
                            {selectedProject.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {selectedProject.desc}
                          </p>
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies utilisées</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-[#21D375]/10 text-[#21D375] text-sm rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#21D375] text-[#21D375] rounded-xl hover:bg-[#21D375] hover:text-white transition"
                          >
                            <IconExternalLink size={18}/> Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* SECTION CONTACT */}
          <div className="relative flex items-center justify-center my-1 md:my-2 px-6">
            <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-[#21D375]/40 to-transparent" />
          </div>

          <section id="contact" className="w-full max-w-[800px] mt-32 mb-16 mx-auto rounded-[2rem] px-8 py-6 border backdrop-blur-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${dark ? "text-white" : "text-gray-800"}`}>
                  Contact Me
                </h2>
                <p className={`text-center max-w-xl mx-auto text-sm md:text-base ${dark ? "text-gray-300" : "text-gray-700"}`}>
                  Feel free to reach out if you want to work together or have a project in mind.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block mb-1.5 text-xs font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className={`w-full px-5 py-3 border rounded-xl transition-all duration-300 outline-none text-sm
                        ${dark 
                          ? "bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#21D375] focus:bg-white/20" 
                          : "bg-white/80 border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-[#A2CA6C] focus:shadow-lg focus:bg-white"
                        }
                      `}
                    />
                  </div>

                  <div>
                    <label className={`block mb-1.5 text-xs font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className={`w-full px-5 py-3 border rounded-xl transition-all duration-300 outline-none text-sm
                        ${dark 
                          ? "bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#21D375] focus:bg-white/20" 
                          : "bg-white/80 border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-[#A2CA6C] focus:shadow-lg focus:bg-white"
                        }
                      `}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block mb-1.5 text-xs font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className={`w-full px-5 py-3 border rounded-xl transition-all duration-300 outline-none text-sm
                      ${dark 
                        ? "bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#21D375] focus:bg-white/20" 
                        : "bg-white/80 border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-[#A2CA6C] focus:shadow-lg focus:bg-white"
                      }
                    `}
                  />
                </div>

                <div>
                  <label className={`block mb-1.5 text-xs font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={2}
                    required
                    className={`w-full px-5 py-3 border rounded-xl transition-all duration-300 outline-none resize-none text-sm
                      ${dark 
                        ? "bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-[#21D375] focus:bg-white/20" 
                        : "bg-white/80 border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-[#A2CA6C] focus:shadow-lg focus:bg-white"
                      }
                    `}
                  />
                </div>

                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-10 py-3 font-semibold text-sm rounded-xl transition-all duration-300
                      ${dark
                        ? "bg-white text-[#244539] hover:bg-gray-100"
                        : "bg-[#A2CA6C] text-white hover:bg-[#8BB55C]"
                      }
                    `}
                  >
                    <span className="flex items-center gap-2">
                      {loading ? (
                        <>
                          <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span>→</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </LazyMotion>
  );
}