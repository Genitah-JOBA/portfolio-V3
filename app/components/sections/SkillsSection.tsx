'use client';

import { motion } from 'framer-motion';
import { ACCENT_COLOR, TEXT_COLOR, skillCategories } from '@/app/constants';
import { 
  Layout, 
  Server, 
  Smartphone,
  Cloud,
  Braces,
  Paintbrush,
  Coffee,
  GitBranch,
  Globe,
  Terminal,
  Database,
  Code,
  Figma,
  LucideIcon
} from 'lucide-react';

// Map des icônes par compétence (basée sur les données de index.ts)
const skillIconMap: Record<string, LucideIcon> = {
  'HTML': Layout,
  'CSS': Paintbrush,
  'Design responsive': Layout,
  'JavaScript': Braces,
  'TypeScript': Braces,
  'React.js': Braces,
  'React': Braces,
  'Next.js': Globe,
  'Vue.js': Globe,
  'Angular': Layout,
  'Tailwind CSS': Paintbrush,
  'Tailwind': Paintbrush,
  'Vite': Code,
  'Node.js': Coffee,
  'Express.js': Server,
  'Express': Server,
  'PHP': Terminal,
  'Laravel': Code,
  'Java': Terminal,
  'Spring Boot': Server,
  'Python': Terminal,
  'API REST': Code,
  'MySQL': Database,
  'PostgreSQL': Database,
  'Supabase': Database,
  'Firebase': Database,
  'Flutter': Smartphone,
  'React Native': Smartphone,
  'Git': GitBranch,
  'GitHub': GitBranch,
  'Git Bash': Terminal,
  'Postman': Code,
  'VS Code': Code,
  'Figma': Figma,
  'Vercel': Cloud,
  'Netlify': Cloud,
  'Render': Cloud,
};

const categoryIconMap: Record<string, LucideIcon> = {
  'Frontend': Layout,
  'Backend': Server,
  'Databases': Database,
  'Mobile': Smartphone,
  'DevOps & Tools': Cloud,
};

// Catégories à afficher
const categoriesToShow = ['Frontend', 'Backend', 'Databases', 'Mobile', 'DevOps & Tools'];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête simple */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 rounded-full mb-4 border"
            style={{ borderColor: `${ACCENT_COLOR}30` }}
          >
            <span className="text-sm" style={{ color: ACCENT_COLOR }}>
              ✦ MY KNOWLEDGE ✦
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Creativity & {" "}
            <span 
              className="text-transparent bg-clip-text" 
              style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}80)` }}
            >
              knowledge
            </span>
          </h2>
          <p className="text-white/50 mt-4">Hierarchy of my technical expertise</p>
        </motion.div>

        {/* Grille simple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {skillCategories
            .filter(cat => categoriesToShow.includes(cat.title))
            .map((category, idx) => {
              const Icon = categoryIconMap[category.title] || Layout;
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-xl border p-4"
                  style={{
                    backgroundColor: `${ACCENT_COLOR}05`,
                    borderColor: `${ACCENT_COLOR}15`,
                  }}
                >
                  {/* Titre */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b" 
                    style={{ borderColor: `${ACCENT_COLOR}10` }}
                  >
                    <Icon size={18} style={{ color: ACCENT_COLOR }} />
                    <h3 className="font-semibold text-xs" style={{ color: ACCENT_COLOR }}>
                      {category.title}
                    </h3>
                    <span className="ml-auto text-xs text-white/30">
                      {category.skills.length}
                    </span>
                  </div>

                  {/* Liste des compétences */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:scale-105"
                        style={{
                          backgroundColor: `${ACCENT_COLOR}15`,
                          color: TEXT_COLOR,
                          border: `1px solid ${ACCENT_COLOR}10`,
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};