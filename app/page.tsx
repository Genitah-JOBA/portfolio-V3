"use client";

import Footer from './components/Footer';
import { useState, useRef, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { IconDownload, IconGauge } from '@tabler/icons-react';
import { Sparkle, Strategy, Handshake } from "@phosphor-icons/react";
import { Cpu,Code2 } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
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
  Zap, 
  Star, 
  Gauge,
  Users,
  Award,
  Clock,
  ThumbsUp,
  HeartHandshake,
  Target,
  Trophy,
  Sparkles,
  Briefcase
} from 'lucide-react';

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

// ========== DÉFINITIONS DES TYPES - À METTRE EN TOUT PREMIER ==========
type MessageType = 'success' | 'error' | 'info' | 'warning' | '';

interface MessageBoxState {
  show: boolean;
  type: MessageType;  // Accepte '' comme valeur
  message: string;
}

interface MessageBoxProps {
  message: string;
  type: MessageType;  // Doit correspondre exactement
  onClose: () => void;
  dark?: boolean;
  duration?: number;
}

// ================= COMPOSANT MESSAGE BOX =================
const MessageBox = ({ 
  message, 
  type, 
  onClose, 
  dark = false,
  duration = 5000 
}: MessageBoxProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  // Couleurs en fonction du type
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
      initial={{ opacity: 0, y: -50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.5 }}
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
        {/* Icône */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: type === 'success' ? [0, 360] : [0, 10, -10, 0]
          }}
          transition={{ duration: 0.5 }}
          className={`p-2 rounded-full ${
            type === 'success'
              ? dark ? 'bg-[#21D375]/20' : 'bg-[#A2CA6C]/20'
              : 'bg-red-500/20'
          }`}
        >
          {type === 'success' ? (
            <svg className={`w-5 h-5 ${dark ? 'text-[#21D375]' : 'text-[#A2CA6C]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </motion.div>

        {/* Message */}
        <div className="flex-1">
          <h3 className={`font-semibold mb-1 ${
            type === 'success'
              ? dark ? 'text-[#21D375]' : 'text-[#A2CA6C]'
              : 'text-red-500'
          }`}>
            {type === 'success' ? 'Succès !' : 'Erreur !'}
          </h3>
          <p className={`text-sm ${
            dark ? 'text-white/80' : 'text-slate-700'
          }`}>
            {message}
          </p>
        </div>

        {/* Bouton fermer */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-1 rounded-full hover:bg-black/10 transition-colors
            ${dark ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-slate-700'}
          `}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>

      {/* Barre de progression */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 rounded-b-xl
          ${type === 'success'
            ? dark ? 'bg-[#21D375]' : 'bg-[#A2CA6C]'
            : 'bg-red-500'
          }`}
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 5, ease: "linear" }}
      />
    </motion.div>
  );
};

// ================= COMPOSANT POUR LES PARTICULES =================
const Particles = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ne rien rendre côté serveur
  if (!isMounted) return null;

  // Ne rendre que côté client
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#21D375] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// ================= COMPOSANT POUR LES PARTICULES FIXES (SECTION ABOUT) =================
const FixedParticles = () => {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 5 }).map((_, row) => (
        Array.from({ length: 4 }).map((_, col) => {
          const baseTop = 10 + row * 20;
          const baseLeft = 10 + col * 25;
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
                opacity: [0, 0.5, 0],
                y: [0, -30, -60],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (row * 4 + col) * 0.2,
                ease: "easeOut"
              }}
            />
          );
        })
      ))}
    </div>
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
    desc: "Aura Privé is a modern e-commerce platform dedicated to selling exclusive and elegant products. The system allows users to browse a product catalog, place orders online, and manage their purchases simply and securely.",
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

// ================= COMPOSANT PRINCIPAL =================
export default function Home() {
  const [dark, setDark] = useState(true); 
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [messageBox, setMessageBox] = useState<MessageBoxState>({ 
    show: false, 
    type: '',  // Maintenant '' est valide
    message: '' 
  });

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
        setMessageBox({
          show: true,
          type: 'success',
          message: 'Message envoyé avec succès !'
        });
        formRef.current.reset();
      } else {
        setMessageBox({
          show: true,
          type: 'error',
          message: 'Erreur lors de l\'envoi. Veuillez réessayer.'
        });
      }
    } catch (error) {
      setMessageBox({
        show: true,
        type: 'error',
        message: 'Erreur lors de l\'envoi. Veuillez réessayer.'
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = React.useMemo(() => {
    if (filter === "All") {
      return projects;
    }
    
    return projects.filter(project => 
      project.category.toLowerCase().trim() === filter.toLowerCase().trim()
    );
  }, [filter]);

  return (
    <main>
      <AnimatePresence>
        {messageBox.show && (
          <MessageBox
            message={messageBox.message}
            type={messageBox.type}
            dark={dark}
            onClose={() => setMessageBox({ 
              show: false, 
              type: '',  // Maintenant '' est valide
              message: '' 
            })}
          />
        )}
      </AnimatePresence>

      <div className="flex-grow">
        {/* SECTION ACCEUIL */}
        <section
          id="Acceuil"
          className="py-12 md:py-20 flex items-center justify-center px-6 relative overflow-hidden"
        >
          {/* ANIMATIONS DE FOND PERMANENTES */}
          
          {/* Grille animée */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${'#21D375'}20 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
            animate={{ 
              backgroundPosition: ['0px 0px', '50px 50px'],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />

          {/* Cercles lumineux flottants */}
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-[#21D375]/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0, -50, 0],
              y: [0, -30, 60, 30, 0],
              scale: [1, 1.2, 0.8, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#21D375]/5 rounded-full blur-3xl"
            animate={{
              x: [0, -70, 40, -40, 0],
              y: [0, 50, -30, 20, 0],
              scale: [1, 0.9, 1.3, 0.8, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* PARTICULES - RENDU UNIQUEMENT CÔTÉ CLIENT */}
          <Particles />

          <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center relative z-10">
            
            {/* TEXTE AVEC ANIMATIONS */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="text-center md:text-left relative"
            >
              {/* Badge flottant "NEW" */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -top-10 left-0 bg-[#21D375] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  ✦
                </motion.span>
                Available for work
              </motion.div>

              {/* Titre principal avec animation de lettres */}
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                >
                  Hello, I'm 
                  <motion.span 
                    className="text-[#21D375] block md:inline-block relative"
                    style={{ fontFamily: 'Cooper' }}
                  >
                    JOBA Razafindrasoa Genitah
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#21D375]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </motion.span>
                </motion.h1>
              </div>

              {/* Sous-titre avec effet de machine à écrire */}
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2"
              >
                <motion.span
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    color: ['#21D375', '#10B981', '#21D375']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  &lt;
                </motion.span>
                Junior Fullstack Developer
                <motion.span
                  animate={{ 
                    rotate: [0, -10, 10, 0],
                    color: ['#21D375', '#10B981', '#21D375']
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  /&gt;
                </motion.span>
              </motion.h2>

              {/* Description avec animation de fade */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-black dark:text-white mb-6 relative"
              >
                <motion.span
                  className="absolute -left-4 top-0 text-[#21D375] text-xl"
                  animate={{ 
                    opacity: [0, 1, 0],
                    x: [-10, 0, 10]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  "
                </motion.span>
                I design and develop modern, high-performance and secure web applications 
                using technologies such as Next.js, React, Node.js, Python, PHP, Laravel, Java and C#.
                <motion.span
                  className="absolute -right-4 bottom-0 text-[#21D375] text-xl"
                  animate={{ 
                    opacity: [0, 1, 0],
                    x: [10, 0, -10]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  "
                </motion.span>
              </motion.p>

              {/* Boutons avec animations - STYLE D'ORIGINE CORRIGÉ */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <motion.a 
                  href="#projects" 
                  className="text-[#244539] flex items-center gap-2 border border-[#21D375] dark:text-[#21D375] px-6 py-3 rounded-lg hover:bg-[#244539] hover:text-white transition group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  suppressHydrationWarning
                >
                  <motion.span
                    className="absolute inset-0 bg-[#21D375]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ zIndex: -1 }}
                  />
                  <span>View my projects</span>
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkle size={22} weight="duotone" />
                  </motion.div>
                </motion.a>

                <motion.a
                  href="/cv.pdf"
                  download="Mon_CV.pdf"
                  className="text-[#244539] flex items-center gap-2 border border-[#21D375] dark:text-[#21D375] px-6 py-3 rounded-lg hover:bg-[#244539] hover:text-white transition group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  suppressHydrationWarning
                >
                  <motion.span
                    className="absolute inset-0 bg-[#21D375]"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ zIndex: -1 }}
                  />
                  <motion.div
                    animate={{ y: [0, -3, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <IconDownload size={22} />
                  </motion.div>
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

              {/* Indicateur de scroll */}
              <motion.div
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-10 border-2 border-[#21D375] rounded-full flex justify-center">
                  <motion.div
                    className="w-1 h-2 bg-[#21D375] rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* IMAGE AVEC ANIMATIONS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="flex justify-center relative"
            >
              <div className="relative w-60 h-60 md:w-80 md:h-80">
                {/* Cercles orbitaux */}
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-[#21D375]/30 border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="absolute -inset-8 rounded-full border border-[#21D375]/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Image principale */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/Images.jpg"
                    alt="Photo JOBA"
                    loading="eager"
                    fill
                    className="object-cover rounded-full shadow-2xl border-4 border-[#21D375] relative z-10"
                  />
                  
                  {/* Overlay d'effet de brillance */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
                </motion.div>

                {/* Badge développeur animé */}
                <motion.div
                  animate={{ 
                    x: [0, 8, -8, 0],
                    y: [0, -12, 12, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 0,
                    backgroundColor: "#244539",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="absolute bottom-6 -right-8 md:bottom-10 md:-right-12 
                            bg-[#21D375] text-white px-4 py-2 rounded-full 
                            shadow-[0_10px_20px_rgba(33,211,117,0.3)] 
                            border-2 border-white dark:border-gray-900 
                            flex items-center gap-2 cursor-default z-30"
                >
                  <motion.span 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                      boxShadow: [
                        '0 0 8px white',
                        '0 0 15px white',
                        '0 0 8px white'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  
                  <motion.span 
                    className="text-sm md:text-base font-bold tracking-widest whitespace-nowrap"
                    style={{ fontFamily: 'Cooper' }}
                    animate={{ 
                      letterSpacing: ['0.1em', '0.2em', '0.1em']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    &lt; DEVELOPER / &gt;
                  </motion.span>
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

        {/* SECTION ABOUT - DESIGN MINIMALISTE & CINÉMATIQUE */}
        <section id="about" className="py-20 px-6 overflow-hidden relative">
          {/* Nouveau fond : vagues organiques subtiles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dégradé de fond dynamique */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A2CA6C]/5 via-transparent to-[#244539]/5" />
            
            {/* Vagues animées style "glassmorphism" */}
            <svg className="absolute bottom-0 left-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1440 800">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#A2CA6C" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#244539" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <motion.path
                fill="url(#waveGradient)"
                d="M0,320L48,341.3C96,363,192,405,288,405.3C384,405,480,363,576,336C672,309,768,299,864,314.7C960,331,1056,373,1152,384C1248,395,1344,373,1392,362.7L1440,352L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
                animate={{
                  d: [
                    "M0,320L48,341.3C96,363,192,405,288,405.3C384,405,480,363,576,336C672,309,768,299,864,314.7C960,331,1056,373,1152,384C1248,395,1344,373,1392,362.7L1440,352L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z",
                    "M0,288L48,298.7C96,309,192,331,288,330.7C384,331,480,309,576,288C672,267,768,245,864,256C960,267,1056,309,1152,330.7C1248,352,1344,352,1392,352L1440,352L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z",
                    "M0,352L48,341.3C96,331,192,309,288,314.7C384,320,480,352,576,368C672,384,768,384,864,368C960,352,1056,320,1152,320C1248,320,1344,352,1392,368L1440,384L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
                  ]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
              />
            </svg>

            {/* Effet de particules flottantes style "space" */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  background: i % 2 === 0 ? '#A2CA6C' : '#244539',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  filter: 'blur(1px)',
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50, 0],
                  x: [0, Math.random() * 80 - 40, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* NOUVEAU TITRE : Style "ascii art" animé */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="inline-block"
              >
                <div className="relative">
                  {/* Badge décoratif */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-[#A2CA6C]/20 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Titre principal avec effet de découpage */}
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
                    <span className="relative">
                      <span className="absolute inset-0 text-[#A2CA6C] blur-sm opacity-50">
                        01.
                      </span>
                      <span className="relative bg-gradient-to-r from-[#A2CA6C] via-[#21D375] to-[#244539] bg-clip-text text-transparent">
                        01.
                      </span>
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Who Am I</span>
                  </h2>
                  
                  {/* Ligne décorative asymétrique */}
                  <motion.div
                    className="absolute -bottom-4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-[#A2CA6C] to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '8rem' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-[0.3em] mt-8"
              >
                {">_"}+ Passion for innovation
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* NOUVEAU TEXTE : Style terminal */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                {/* Cadre style terminal */}
                <div className="relative bg-black/5 dark:bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-[#A2CA6C]/20">
                  {/* Dots style terminal */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      <span className="text-[#A2CA6C]">$</span> whoami
                      <br />
                      <span className="text-gray-600 dark:text-gray-400">
                        * Fullstack Developer passionate about creating impactful digital experiences.
                      </span>
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      <span className="text-[#A2CA6C]">$</span> skills --tech-stack
                      <br />
                      <span className="text-gray-600 dark:text-gray-400">
                        * React, Next.js, Node.js, Python, PHP, Laravel, Java, C#
                      </span>
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      <span className="text-[#A2CA6C]">$</span> philosophy --principles
                      <br />
                      <span className="text-gray-600 dark:text-gray-400">
                        * Clean code, performance, user experience, scalability
                      </span>
                    </motion.p>

                    {/* Curseur clignotant */}
                    <motion.span
                      className="inline-block w-2 h-4 bg-[#A2CA6C]"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Badge de stats flottant */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-[#A2CA6C]/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.5,
                    type: "spring"
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#A2CA6C]">5+</div>
                    <div className="text-xs text-gray-500">Projects Completed</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* NOUVEAUX BLOCS : Style cartes "glassmorphism" avec métriques */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Métrique 1 - XP */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A2CA6C]/0 to-[#A2CA6C]/5 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex justify-between items-start">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-[#A2CA6C] font-semibold">Experience</p>
                      <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">2 Years</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Fullstack Development</p>
                    </div>
                    <div className="p-2 rounded-xl bg-[#A2CA6C]/10 group-hover:bg-[#A2CA6C]/20 transition-all duration-300">
                      <Briefcase size={28} className="text-[#A2CA6C]" />
                    </div>
                  </div>
                </motion.div>

                {/* Métrique 2 - Impact */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10"
                >
                  <div className="relative flex justify-between items-start">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-[#A2CA6C] font-semibold">Impact</p>
                      <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">70%</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Client Satisfaction</p>
                    </div>
                    <div className="p-2 rounded-xl bg-[#A2CA6C]/10 group-hover:bg-[#A2CA6C]/20 transition-all duration-300">
                      <Award size={28} className="text-[#A2CA6C]" />
                    </div>
                  </div>
                  {/* Barre de progression */}
                  <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#A2CA6C] to-[#244539]"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                  </div>
                </motion.div>

                {/* Métrique 3 - Speed */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group relative bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A2CA6C]/0 to-[#A2CA6C]/5 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex justify-between items-start">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-[#A2CA6C] font-semibold">Experience</p>
                      <h3 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">3+ Years</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Fullstack Development</p>
                    </div>
                    <div className="p-2 rounded-xl bg-[#A2CA6C]/10 group-hover:bg-[#A2CA6C]/20 transition-all duration-300">
                      <Users size={28} className="text-[#A2CA6C]" />
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        className="h-1 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: 1 + i * 0.1 }}
                      >
                        <div className="h-full bg-[#A2CA6C]" style={{ width: i === 5 ? '100%' : `${i * 20}%` }} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* NOUVEAU BOUTON : Style "explore" */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A2CA6C] to-[#244539] opacity-90 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <span className="relative z-10 text-white font-semibold">Start a project</span>
                <motion.span
                  className="relative z-10 text-white"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* SECTION SKILLS */}
        <div className="relative flex items-center justify-center my-6 md:my-8 px-6">
          <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-black/40 dark:via-[#21D375]/40 to-transparent"></div>
          <div className="absolute flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black dark:bg-[#21D375] shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_10px_#21D375]"></div>
            <div className="absolute w-5 h-5 rounded-full border border-black/30 dark:border-[#21D375]/50 animate-ping"></div>
          </div>
        </div>

        <section id="skills" className="py-20 px-6 overflow-hidden relative from-amber-50 via-white to-emerald-50">
          {/* Éléments décoratifs Pinterest */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grands cercles flous */}
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald-200/30 dark:bg-emerald-500/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-amber-200/30 dark:bg-amber-500/10 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Lignes courbes */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#21D375" stopOpacity="0" />
                  <stop offset="50%" stopColor="#21D375" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#21D375" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[...Array(5)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M ${100 + i * 200} 100 Q 400 300, 700 200 T 1200 150`}
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>

            {/* Petits points décoratifs */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #21D375 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }} />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Titre style Pinterest */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 tracking-wider mb-2 block">
                • MES COMPÉTENCES •
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Créativité & 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400"> Expertise</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A unique blend of design thinking and technical development for exceptional projects.
              </p>
              
              {/* Barre de séparation décorative */}
              <motion.div
                className="flex justify-center gap-2 mt-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <div className="w-12 h-1 bg-emerald-400 rounded-full" />
                <div className="w-4 h-1 bg-emerald-200 rounded-full" />
                <div className="w-2 h-1 bg-emerald-100 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Grille de compétences style Pinterest */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ 
                    duration: 0.6,
                    delay: idx * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative h-full bg-white dark:bg-[#244539] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Image de fond décorative */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent" />
                    </div>

                    {/* En-tête avec icône */}
                    <div className="relative p-8 pb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                          <div className="text-emerald-600 dark:text-emerald-400 text-xl">
                            {cat.icon}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {cat.title}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cat.title === "Frontend" && "Création d'interfaces modernes et réactives"}
                        {cat.title === "Backend" && "Architecture robuste et scalable"}
                        {cat.title === "Databases" && "Gestion efficace des données"}
                        {cat.title === "DevOps & Tools" && "Déploiement et automatisation"}
                      </p>
                    </div>

                    {/* Liste des compétences */}
                    <div className="relative p-8 pt-0 space-y-4">
                      {cat.skills.map((skill, sIdx) => (
                        <motion.div
                          key={sIdx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.5 + idx * 0.1 + sIdx * 0.05 }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-600 dark:text-emerald-400 text-lg">
                                {skill.icon}
                              </span>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Barre de progression stylisée */}
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: false }}
                              transition={{ 
                                duration: 1,
                                delay: 0.8 + idx * 0.1 + sIdx * 0.05,
                                ease: [0.16, 1, 0.3, 1]
                              }}
                              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full relative"
                            >
                              {/* Effet de brillance */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                animate={{
                                  x: ["-100%", "200%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer de la carte */}
                    <div className="relative p-8 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white dark:border-gray-800"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {cat.skills.length} compétences
                          </span>
                        </div>
                        
                        {/* Indicateur de maîtrise */}
                        <div className="flex items-center gap-1">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 h-1 rounded-full bg-emerald-400"
                              animate={{
                                scale: [1, 1.5, 1],
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Effet de bordure au hover */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ boxShadow: '0 0 30px rgba(33, 211, 117, 0.3)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 1.3 }}
              className="text-center mt-16"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#A2CA6C] dark:bg-[#244539] from-emerald-500 to-emerald-600 text-black dark:text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <span>Let's discuss your project</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="group-hover:translate-x-1 transition-transform"
                >
                  →
                </motion.span>
              </a>
            </motion.div>
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

        <section id="projects" className="py-20 px-6 overflow-hidden relative">
          {/* Éléments d'arrière-plan - Géométrie verte */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Triangles verts qui tournent */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${15 + i * 10}%`,
                    left: `${5 + i * 12}%`,
                    width: '100px',
                    height: '100px',
                    borderLeft: '50px solid transparent',
                    borderRight: '50px solid transparent',
                    borderBottom: `100px solid rgba(33, 211, 117, ${0.02 + i * 0.01})`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 20 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            {/* Lignes verticales vertes */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-full w-px bg-[#21D375]"
                  style={{
                    left: `${i * 7}%`,
                    opacity: 0.03,
                  }}
                  animate={{
                    y: ['-100%', '100%'],
                    opacity: [0.02, 0.08, 0.02],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Cercles concentriques verts */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[#21D375]"
                  style={{
                    width: `${200 + i * 100}px`,
                    height: `${200 + i * 100}px`,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.1 - i * 0.02,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Grille de points verts */}
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundImage: 'radial-gradient(circle, #21D375 1px, transparent 1px)', 
                backgroundSize: '40px 40px',
                opacity: 0.1
              }} 
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Titre avec effet de construction */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="relative inline-block">
                {/* Carrés décoratifs verts */}
                <motion.div
                  className="absolute -left-12 -top-12 w-8 h-8 border-2 border-[#21D375]/30"
                  variants={{
                    hidden: { rotate: 0, scale: 0 },
                    visible: { rotate: 45, scale: 1, transition: { delay: 0.2, duration: 0.6 } }
                  }}
                />
                <motion.div
                  className="absolute -right-12 -bottom-12 w-8 h-8 border-2 border-[#21D375]/30"
                  variants={{
                    hidden: { rotate: 0, scale: 0 },
                    visible: { rotate: -45, scale: 1, transition: { delay: 0.4, duration: 0.6 } }
                  }}
                />
                
                <h2 className="text-5xl md:text-6xl font-light tracking-[0.3em]">
                  {"PROJECTS".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { 
                          opacity: 0,
                          y: -20,
                        },
                        visible: { 
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            delay: index * 0.05
                          }
                        }
                      }}
                      className="inline-block text-[#21D375] dark:text-[#21D375]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </h2>
                
                {/* Ligne horizontale verte */}
                <motion.div
                  className="absolute -bottom-4 left-0 w-full h-px bg-[#21D375]"
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 1, transition: { delay: 0.8, duration: 0.8 } }
                  }}
                />
              </div>
            </motion.div>

            {/* Filtres - Style badges verts */}
            <motion.div 
              className="flex justify-center gap-2 mb-16 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {["All", "Frontend", "Backend", "Fullstack"].map((cat) => (
                <motion.button
                  key={cat}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -2 }}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300
                    ${filter === cat 
                      ? "text-[#21D375] font-medium border-b-2 border-[#21D375]" 
                      : "text-gray-500 hover:text-[#21D375]"
                    }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            {/* Grille de projets - Images droites */}
            <motion.div 
              layout 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={filter} // Ajoutez cette ligne pour forcer le re-rendu quand filter change
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    variants={{
                      hidden: { 
                        opacity: 0,
                        scale: 0.9,
                        y: 30,
                      },
                      visible: { 
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          damping: 20,
                          stiffness: 100,
                          delay: index * 0.1
                        }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.9,
                      y: -30,
                      transition: { duration: 0.3 }
                    }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative bg-white dark:bg-[#244539] rounded-2xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-[#21D375] transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image droite */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full relative"
                      >
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Overlay vert au hover */}
                      <motion.div 
                        className="absolute inset-0 bg-[#21D375]/0 group-hover:bg-[#21D375]/10 transition-colors duration-300"
                      />

                      {/* Badge catégorie vert */}
                      <motion.div
                        className="absolute top-4 left-4 px-3 py-1 bg-[#21D375] text-white text-xs font-medium rounded-full"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.category}
                      </motion.div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-[#21D375] transition-colors">
                          {project.title}
                        </h3>
                        <motion.span
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="text-[#21D375] opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          →
                        </motion.span>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {project.desc}
                      </p>

                      {/* Tags verts */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <motion.span 
                            key={tag}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="text-xs px-3 py-1 bg-[#21D375]/10 text-[#21D375] rounded-full"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Bordure verte au hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-[#21D375] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Aucun projet trouvé dans la catégorie "{filter}"
                </p>
              </motion.div>
            )}
            {/* Modal de projet - Style épuré vert */}
            <AnimatePresence>
              {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  />
                  
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative bg-white dark:bg-gray-900 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl z-[101] border border-[#21D375]/20"
                  >
                    {/* Coins décoratifs verts */}
                    <div className="absolute top-0 left-0 w-16 h-px bg-[#21D375]" />
                    <div className="absolute top-0 left-0 w-px h-16 bg-[#21D375]" />
                    <div className="absolute top-0 right-0 w-16 h-px bg-[#21D375]" />
                    <div className="absolute top-0 right-0 w-px h-16 bg-[#21D375]" />
                    <div className="absolute bottom-0 left-0 w-16 h-px bg-[#21D375]" />
                    <div className="absolute bottom-0 left-0 w-px h-16 bg-[#21D375]" />
                    <div className="absolute bottom-0 right-0 w-16 h-px bg-[#21D375]" />
                    <div className="absolute bottom-0 right-0 w-px h-16 bg-[#21D375]" />

                    <button 
                      onClick={() => setSelectedProject(null)} 
                      className="absolute top-6 right-6 text-gray-400 hover:text-[#21D375] transition-colors z-10 bg-white dark:bg-gray-900 rounded-full p-1"
                    >
                      <IconX size={20}/>
                    </button>

                    <div className="grid md:grid-cols-2">
                      {/* Image droite */}
                      <div className="relative h-80 md:h-full bg-gray-100 dark:bg-gray-800">
                        <Image 
                          src={selectedProject.image} 
                          alt={selectedProject.title} 
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Contenu */}
                      <div className="p-8">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
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
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-[#21D375]/10 text-[#21D375] text-sm rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <motion.a
                              href={selectedProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#21D375] text-[#21D375] rounded-xl hover:bg-[#21D375] hover:text-white transition"
                              whileHover={{ y: -2 }}
                              whileTap={{ y: 0 }}
                            >
                              <IconExternalLink size={18}/> Demo
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* NOUVEAU BOUTON : Style "explore" */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A2CA6C] to-[#244539] opacity-90 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <span className="relative z-10 text-white font-semibold">View all projects</span>
                <motion.span
                  className="relative z-10 text-white"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
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

        {/* CONTACT SECTION */}
        <motion.section
  id="contact"
  initial={{ opacity: 0, scale: 0.5, rotateY: 90, y: 100 }}
  whileInView={{ 
    opacity: 1, 
    scale: 1, 
    rotateY: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80,
      duration: 1.2,
      delay: 0.2
    }
  }}
  viewport={{ once: false, margin: "-50px" }}
  className="w-full max-w-[800px] mt-32 mb-16 mx-auto rounded-[2rem] px-8 py-6 border backdrop-blur-sm relative overflow-hidden"
  style={{
    backgroundColor: dark ? '#244539' : '#A2CA6C',
    borderColor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
    boxShadow: dark 
      ? '0 20px 50px rgba(0,0,0,0.7)' 
      : '0 20px 40px rgba(0,0,0,0.12)'
  }}
>
  {/* Effet de particules lumineuses qui tournent - COULEURS ADAPTÉES */}
  <motion.div
    className="absolute inset-0 pointer-events-none"
    animate={{
      background: dark ? [
        "radial-gradient(circle at 20% 20%, rgba(33, 211, 117, 0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 80% 80%, rgba(33, 211, 117, 0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 20% 80%, rgba(33, 211, 117, 0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 80% 20%, rgba(33, 211, 117, 0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 20% 20%, rgba(33, 211, 117, 0.15) 0%, transparent 50%)",
      ] : [
        "radial-gradient(circle at 20% 20%, rgba(162, 202, 108, 0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 80% 80%, rgba(162, 202, 108, 0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 20% 80%, rgba(162, 202, 108, 0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 80% 20%, rgba(162, 202, 108, 0.15) 0%, transparent 50%)",
        "radial-gradient(circle at 20% 20%, rgba(162, 202, 108, 0.15) 0%, transparent 50%)",
      ]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  />

  {/* Effet de fond animé - plus subtil */}
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    {/* Cercle lumineux animé - Gauche */}
    <motion.div
      className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl"
      style={{
        backgroundColor: dark ? '#21D375' : '#A2CA6C',
        opacity: 0.1
      }}
      animate={{
        scale: [1, 1.3, 1],
        x: [0, 30, 0],
        y: [0, 30, 0],
        rotate: [0, 45, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    {/* Cercle lumineux animé - Droite */}
    <motion.div
      className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl"
      style={{
        backgroundColor: dark ? '#21D375' : '#A2CA6C',
        opacity: 0.1
      }}
      animate={{
        scale: [1.3, 1, 1.3],
        x: [0, -30, 0],
        y: [0, -30, 0],
        rotate: [45, 0, 45],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>

  {/* Lignes lumineuses qui traversent */}
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    <motion.div
      className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A2CA6C] to-transparent dark:via-[#21D375]"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: "100%", opacity: 0.5 }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.div
      className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A2CA6C] to-transparent dark:via-[#21D375]"
      initial={{ x: "100%", opacity: 0 }}
      whileInView={{ x: "-100%", opacity: 0.5 }}
      transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
    />
  </motion.div>

  {/* Ligne de séparation animée */}
  <motion.div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#A2CA6C] to-transparent dark:via-[#21D375]"
    whileInView={{
      width: "100%",
      transition: { duration: 1, delay: 0.2 }
    }}
  />

  <div className="relative z-10">
    {/* Titre avec animation de lettres qui explosent */}
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center mb-8"
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 relative`}>
        {"Contact Me".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -50, rotate: -180 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              rotate: 0,
              transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                delay: 0.3 + index * 0.05
              }
            }}
            className={`inline-block ${
              dark ? "text-white" : "text-gray-800"
            }`}
            style={{ 
              textShadow: dark 
                ? "0 0 10px #21D375" 
                : "0 0 10px rgba(162, 202, 108, 0.5)" 
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>

      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className={`text-center max-w-xl mx-auto text-sm md:text-base ${
          dark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Feel free to reach out if you want to work together or have a project in mind.
      </motion.p>

      {/* Soulignement animé */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-[#A2CA6C] to-transparent dark:from-[#21D375] mx-auto mt-3"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80px", opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />
    </motion.div>

    {/* FORM avec disposition gauche/droite */}
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      {/* Première rangée - Name (gauche) et Email (droite) */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Name - Gauche */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -45 }}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            rotate: 0,
            transition: {
              type: "spring",
              damping: 15,
              stiffness: 100,
              delay: 0.9
            }
          }}
          whileHover={{ scale: 1.05, x: 5 }}
          className="relative group"
        >
          <label className={`block mb-1.5 text-xs font-medium ${
            dark ? "text-gray-300" : "text-gray-700"
          }`}>
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
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            animate={{
              boxShadow: dark ? [
                "0 0 0px rgba(33, 211, 117, 0)",
                "0 0 20px rgba(33, 211, 117, 0.3)",
                "0 0 0px rgba(33, 211, 117, 0)",
              ] : [
                "0 0 0px rgba(162, 202, 108, 0)",
                "0 0 20px rgba(162, 202, 108, 0.3)",
                "0 0 0px rgba(162, 202, 108, 0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Email - Droite */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 45 }}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            rotate: 0,
            transition: {
              type: "spring",
              damping: 15,
              stiffness: 100,
              delay: 1.0
            }
          }}
          whileHover={{ scale: 1.05, x: -5 }}
          className="relative group"
        >
          <label className={`block mb-1.5 text-xs font-medium ${
            dark ? "text-gray-300" : "text-gray-700"
          }`}>
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
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            animate={{
              boxShadow: dark ? [
                "0 0 0px rgba(33, 211, 117, 0)",
                "0 0 20px rgba(33, 211, 117, 0.3)",
                "0 0 0px rgba(33, 211, 117, 0)",
              ] : [
                "0 0 0px rgba(162, 202, 108, 0)",
                "0 0 20px rgba(162, 202, 108, 0.3)",
                "0 0 0px rgba(162, 202, 108, 0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Subject - Pleine largeur */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
            delay: 1.1
          }
        }}
        whileHover={{ scale: 1.02 }}
        className="relative group"
      >
        <label className={`block mb-1.5 text-xs font-medium ${
          dark ? "text-gray-300" : "text-gray-700"
        }`}>
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
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{
            boxShadow: dark ? [
              "0 0 0px rgba(33, 211, 117, 0)",
              "0 0 20px rgba(33, 211, 117, 0.3)",
              "0 0 0px rgba(33, 211, 117, 0)",
            ] : [
              "0 0 0px rgba(162, 202, 108, 0)",
              "0 0 20px rgba(162, 202, 108, 0.3)",
              "0 0 0px rgba(162, 202, 108, 0)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Message - Pleine largeur */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
            delay: 1.2
          }
        }}
        whileHover={{ scale: 1.02 }}
        className="relative group"
      >
        <label className={`block mb-1.5 text-xs font-medium ${
          dark ? "text-gray-300" : "text-gray-700"
        }`}>
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
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{
            boxShadow: dark ? [
              "0 0 0px rgba(33, 211, 117, 0)",
              "0 0 20px rgba(33, 211, 117, 0.3)",
              "0 0 0px rgba(33, 211, 117, 0)",
            ] : [
              "0 0 0px rgba(162, 202, 108, 0)",
              "0 0 20px rgba(162, 202, 108, 0.3)",
              "0 0 0px rgba(162, 202, 108, 0)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </motion.div>

      {/* Bouton centré */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 80,
            delay: 1.3
          }
        }}
        className="relative group mt-2 flex justify-center"
      >
        <motion.button
          type="submit"
          disabled={loading}
          className={`px-10 py-3 font-semibold text-sm rounded-xl relative overflow-hidden transition-all duration-300
            ${dark
              ? "bg-white text-[#244539] hover:bg-gray-100"
              : "bg-[#A2CA6C] text-white hover:bg-[#8BB55C]"
            }
          `}
          whileHover={{ 
            scale: 1.1,
            boxShadow: dark 
              ? "0 0 30px rgba(33, 211, 117, 0.5)"
              : "0 0 30px rgba(162, 202, 108, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Effet de brillance */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <span className="relative z-10 flex items-center gap-2">
            {loading ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className={`w-3 h-3 border-2 ${dark ? 'border-[#244539]' : 'border-white'} border-t-transparent rounded-full`}
                />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </>
            )}
          </span>
        </motion.button>
      </motion.div>
    </form>

    {/* Réseaux sociaux simplifiés */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: 1.4, duration: 0.5 }
      }}
      className="flex flex-col items-center gap-4 mt-8"
    >
      {/* Ligne décorative */}
      <motion.div 
        className="w-16 h-px bg-gradient-to-r from-transparent via-[#A2CA6C] to-transparent dark:via-[#21D375]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Petit texte */}
      <motion.p 
        className={`text-xs ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        I will reply to you as soon as possible.
      </motion.p>
    </motion.div>
  </div>

  {/* Ligne de séparation animée en bas */}
  <motion.div
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#A2CA6C] to-transparent dark:via-[#21D375]"
    whileInView={{
      width: "100%",
      transition: { duration: 1, delay: 0.5 }
    }}
  />
</motion.section>
      </div>
    </main>
  );
}