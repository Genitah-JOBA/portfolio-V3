"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconX, IconExternalLink, IconCode, IconEye } from '@tabler/icons-react';
import { useState } from "react";

const ACCENT_COLOR = "#6EE7B7";
const BG_COLOR = "#050B14";
const TEXT_COLOR = "#FFFFFF";

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
  demo: string;
}

// TOUS LES PROJETS
const allProjects: Project[] = [
  { 
    id: 1, 
    title: "Aura Privée", 
    category: "Fullstack", 
    desc: "Aura Privé is an online boutique for high-end furniture and interior decoration, offering an exclusive collection of modern furniture combining absolute comfort and timeless design.", 
    image: "/e-commerce.jpg", 
    tags: ["React", "Tailwind", "Framer Motion", "Node.js", "Express", "PostgreSQL", "Vercel", "Render", "GitHub"], 
    demo: "https://auraprivefrontend.vercel.app/" 
  },
  { 
    id: 2, 
    title: "Parent Malagasy", 
    category: "Frontend", 
    desc: "Parent Malagasy is a web-based parental monitoring application that allows parents to manage the health, growth, and development of their children from 0 to 12 years old.", 
    image: "/monitoring.jpg", 
    tags: ["Vue.js", "Tailwind", "Framer Motion", "Chart.js", "LocalStorage", "GitHub", "Netlify"], 
    demo: "https://parentmalagasy.netlify.app" 
  },
  { 
    id: 3, 
    title: "ExamPrep",
    category: "Mobile",
    desc: "ExamPrep is a multi-platform mobile exam preparation application that centralizes review sheets, timed tests and progress tracking for EMIT Fianarantsoa students and teachers.", 
    image: "/elearning.jpg", 
    tags: ["Flutter", "Dart", "Supabase", "GitHub"], 
    demo: "https://examprep-ie6gt2y9x-genitahrazafindrasoa-2926s-projects.vercel.app/" 
  },
  { 
    id: 4, 
    title: "Modern Portfolio", 
    category: "Frontend", 
    desc: "3D Portfolio with animations.", 
    image: "/portfolio.jpg", 
    tags: ["Next.js", "Tailwind", "Framer"], 
    demo: "#" 
  },
  { 
    id: 5, 
    title: "Invitation Anniversaire", 
    category: "Frontend", 
    desc: "Invitation interactive avec compte à rebours pour fête d'anniversaire.", 
    image: "/Birthday.jpg", 
    tags: ["HTML", "CSS", "JavaScript", "Countdown"], 
    demo: "https://genitah-joba.github.io/InvitationAnniv/" 
  },
  { 
    id: 6, 
    title: "Auralis", 
    category: "Frontend", 
    desc: "Auralis is a modern and elegant music player, built with React and Vite. It offers an intuitive user interface inspired by Apple Music, with a clean design and immersive visual effects.", 
    image: "/music.jpg", 
    tags: ["React", "Vite", "CSS"], 
    demo: "https://music-nu-khaki.vercel.app/" 
  }
];

interface AllProjectProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AllProject({ isOpen, onClose }: AllProjectProps) {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const filteredProjects = allProjects.filter(p => filter === "All" || p.category === filter);
  const categories = ["All", ...new Set(allProjects.map(p => p.category))];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="absolute inset-0 bg-black/90 backdrop-blur-md" 
          />
          
          {/* Modal avec scroll personnalisé */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 50 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.9, opacity: 0, y: 50 }} 
            transition={{ type: "spring", damping: 25, stiffness: 300 }} 
            className="relative max-w-7xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl custom-scroll"
            style={{ 
              backgroundColor: BG_COLOR, 
              border: `1px solid ${ACCENT_COLOR}20`,
              scrollbarWidth: 'thin',
              scrollbarColor: `${ACCENT_COLOR}40 transparent`
            }}
          >
            {/* Styles CSS pour la scrollbar */}
            <style jsx>{`
              .custom-scroll::-webkit-scrollbar {
                width: 5px;
              }
              .custom-scroll::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 10px;
                margin: 8px 0;
              }
              .custom-scroll::-webkit-scrollbar-thumb {
                background: ${ACCENT_COLOR}30;
                border-radius: 10px;
                transition: background 0.3s ease;
              }
              .custom-scroll::-webkit-scrollbar-thumb:hover {
                background: ${ACCENT_COLOR}60;
              }
              .custom-scroll::-webkit-scrollbar-thumb:active {
                background: ${ACCENT_COLOR}80;
              }
              
              /* Pour Firefox */
              .custom-scroll {
                scrollbar-width: thin;
                scrollbar-color: ${ACCENT_COLOR}40 transparent;
              }
            `}</style>

            {/* Bouton fermer */}
            <button 
              onClick={onClose} 
              className="sticky top-4 float-right z-20 p-3 rounded-full hover:bg-white/10 transition-all mr-4 md:mr-6 mt-4"
              style={{ backgroundColor: `${ACCENT_COLOR}15`, color: ACCENT_COLOR }}
            >
              <IconX size={22} />
            </button>

            <div className="p-6 md:p-10 pt-0">
              {/* En-tête */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: ACCENT_COLOR }}>
                  Mes Projets
                </h2>
                <p className="text-white/60 text-base max-w-2xl mx-auto">
                  Découvrez l'ensemble de mes créations, du design à la réalisation technique
                </p>
              </motion.div>

              {/* Filtres */}
              <div className="flex justify-center gap-2 mb-10 flex-wrap">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === cat 
                        ? 'text-black' 
                        : 'text-white/50 hover:text-white/80'
                    }`}
                    style={filter === cat ? { backgroundColor: ACCENT_COLOR } : { backgroundColor: `${ACCENT_COLOR}10` }}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>

              {/* Grille - Style carte horizontale */}
              <div className="space-y-6">
                {filteredProjects.map((project, index) => (
                  <motion.a
                    key={project.id}
                    href={project.demo}
                    target={project.demo.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 8 }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group block relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                    style={{ 
                      background: hoveredId === project.id ? `${ACCENT_COLOR}08` : 'transparent',
                      border: `1px solid ${hoveredId === project.id ? ACCENT_COLOR : `${ACCENT_COLOR}15`}`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 p-5 md:p-6">
                      {/* Image */}
                      <div className="relative w-full md:w-56 h-40 md:h-44 flex-shrink-0 rounded-xl overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        
                        {/* Badge catégorie */}
                        <span 
                          className="absolute bottom-3 left-3 px-3 py-1 text-xs font-semibold rounded-full"
                          style={{ backgroundColor: ACCENT_COLOR, color: BG_COLOR }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1 transition-colors group-hover:text-[#6EE7B7]">
                              {project.title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                              {project.desc}
                            </p>
                          </div>
                          
                          {/* Indicateur de lien */}
                          <div 
                            className="p-2 rounded-full transition-all flex-shrink-0"
                            style={{ 
                              backgroundColor: hoveredId === project.id ? ACCENT_COLOR : `${ACCENT_COLOR}15`,
                              color: hoveredId === project.id ? BG_COLOR : ACCENT_COLOR
                            }}
                          >
                            <IconExternalLink size={18} />
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span 
                              key={tag} 
                              className="text-xs px-2.5 py-1 rounded-full border"
                              style={{ 
                                borderColor: `${ACCENT_COLOR}20`,
                                color: hoveredId === project.id ? ACCENT_COLOR : 'rgba(255,255,255,0.5)'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="text-xs px-2.5 py-1 rounded-full text-white/30">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Action */}
                        <div className="mt-3 flex items-center gap-4">
                          <span 
                            className="text-sm font-medium transition-all flex items-center gap-1.5"
                            style={{ color: ACCENT_COLOR }}
                          >
                            Voir le projet
                            <IconEye size={16} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Pied de page */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-10"
              >
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: ACCENT_COLOR, color: BG_COLOR }}
                >
                  Fermer
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}