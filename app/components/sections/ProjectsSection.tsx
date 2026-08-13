'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Sparkle, 
  ArrowRight, 
  Eye, 
  Code, 
  GithubLogo,
  Link as LinkIcon 
} from '@phosphor-icons/react';
import { Card3D } from '@/app/components/Card3D';
import { ProjectModal } from '@/app/components/ProjectModal';
import Allproject from '@/app/components/Allproject';
import { projects } from '@/app/constants';
import { ACCENT_COLOR, BG_COLOR, TEXT_COLOR } from '@/app/constants';
import { Project } from '@/app/types';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  // Statistiques
  const totalProjects = projects.length;
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <>
      <section id="projects" className="py-24 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: ACCENT_COLOR }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5"
            style={{ backgroundColor: ACCENT_COLOR }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-4 border" style={{ borderColor: `${ACCENT_COLOR}20` }}>
              <span className="text-xs font-medium" style={{ color: ACCENT_COLOR }}>PORTFOLIO</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Featured{" "}
              <span 
                className="text-transparent bg-clip-text" 
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}60)` 
                }}
              >
                Projects
              </span>
            </h2>
            <p className="text-white/40 mt-4 text-lg">
              {totalProjects} projects across {categories.length} categories
            </p>
          </motion.div>

          {/* Filtres avec compteurs */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {["All", ...categories].map((cat) => {
              const count = cat === "All" 
                ? totalProjects 
                : projects.filter(p => p.category === cat).length;
              
              return (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? 'text-black' 
                      : 'text-white/40 hover:text-white/70'
                  }`}
                  style={filter === cat ? { backgroundColor: ACCENT_COLOR } : { backgroundColor: `${ACCENT_COLOR}05` }}
                >
                  {cat}
                  <span 
                    className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                      filter === cat ? 'bg-black/20' : 'bg-white/5'
                    }`}
                    style={filter !== cat ? { color: `${ACCENT_COLOR}60` } : {}}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Grille de projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Card */}
                <div 
                  className="relative rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    background: hoveredId === project.id 
                      ? `${ACCENT_COLOR}08` 
                      : `${TEXT_COLOR}03`,
                    border: `1px solid ${
                      hoveredId === project.id 
                        ? ACCENT_COLOR 
                        : `${ACCENT_COLOR}10`
                    }`,
                    transform: hoveredId === project.id ? 'translateY(-8px)' : 'none',
                    boxShadow: hoveredId === project.id 
                      ? `0 20px 60px ${ACCENT_COLOR}10` 
                      : 'none'
                  }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <span 
                      className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full"
                      style={{ backgroundColor: ACCENT_COLOR, color: BG_COLOR }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="p-5">
                    <h3 
                      className="text-lg font-bold mb-1 transition-colors"
                      style={{ color: hoveredId === project.id ? ACCENT_COLOR : 'white' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-3">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] px-2 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: `${ACCENT_COLOR}10`,
                            color: hoveredId === project.id ? ACCENT_COLOR : 'rgba(255,255,255,0.4)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full text-white/20">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Indicateur */}
                    <div className="mt-3 flex items-center gap-2">
                      <span 
                        className="text-xs font-medium transition-all flex items-center gap-1 group-hover:gap-2"
                        style={{ color: ACCENT_COLOR }}
                      >
                        View project
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/30">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* Bouton View All Projects - Nouveau style */}
      <div className="flex justify-center my-16 px-6">
        <motion.button
          onClick={() => setShowAllProjects(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative px-10 py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}80)`,
            color: BG_COLOR
          }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <span>View All Projects</span>
            <Sparkle size={22} weight="duotone" className="transition-transform group-hover:rotate-90 duration-300" />
          </span>
          <motion.div
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(135deg, ${ACCENT_COLOR}80, ${ACCENT_COLOR})`,
              opacity: 0
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      <Allproject 
        isOpen={showAllProjects} 
        onClose={() => setShowAllProjects(false)} 
      />
    </>
  );
};