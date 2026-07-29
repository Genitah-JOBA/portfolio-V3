'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, Briefcase, Award, GraduationCap, Code, 
  Sparkles, ChevronRight, Building, Zap, Trophy, BookOpen,
  Star, Rocket, Users, Cpu
} from 'lucide-react';
import { experiences } from '@/app/constants';
import { ACCENT_COLOR, TEXT_COLOR } from '@/app/constants';

export const ExperienceSection = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Stage':
        return Briefcase;
      case 'Mission':
        return Code;
      case 'Formation':
        return GraduationCap;
      case 'Certification':
        return Award;
      default:
        return Sparkles;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Stage':
        return 'from-blue-500/20 to-cyan-500/20';
      case 'Mission':
        return 'from-purple-500/20 to-pink-500/20';
      case 'Formation':
        return 'from-emerald-500/20 to-teal-500/20';
      case 'Certification':
        return 'from-amber-500/20 to-orange-500/20';
      default:
        return 'from-gray-500/20 to-slate-500/20';
    }
  };

  const getStatsIcon = (label: string) => {
    switch (label) {
      case 'Experiences':
        return Rocket;
      case 'Companies':
        return Building;
      case 'Technologies':
        return Cpu;
      case 'Achievements':
        return Trophy;
      default:
        return Star;
    }
  };

  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Background decoration */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-5"
        style={{ backgroundColor: ACCENT_COLOR }}
      />
      
      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 rounded-full mb-4 border"
            style={{ borderColor: `${ACCENT_COLOR}30` }}
          >
            <span className="text-sm" style={{ color: ACCENT_COLOR }}>
              MY EXPERIENCES
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">My </span>
            <span 
              className="relative"
              style={{ color: ACCENT_COLOR }}
            >
              Journey
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ backgroundColor: ACCENT_COLOR }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-white/30 text-sm mt-4 font-light">
            {experiences.length} milestones · {new Set(experiences.map(e => e.company)).size} companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div 
            className="absolute left-2 md:left-4 top-0 bottom-0 w-px"
            style={{ 
              background: `linear-gradient(to bottom, ${ACCENT_COLOR}40, ${ACCENT_COLOR}10, transparent)`
            }}
          />

          {experiences.map((exp, index) => {
            const Icon = getTypeIcon(exp.type);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute -left-8 md:-left-12 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#0a0a0a',
                    borderColor: ACCENT_COLOR 
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.1, type: "spring" }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div 
                  className="group relative p-5 rounded-xl transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${TEXT_COLOR}03, ${TEXT_COLOR}01)`,
                    border: `1px solid ${ACCENT_COLOR}10`
                  }}
                  whileHover={{
                    borderColor: `${ACCENT_COLOR}30`,
                    transform: 'translateX(4px)',
                    boxShadow: `0 8px 30px ${ACCENT_COLOR}08`
                  }}
                >
                  {/* Icon badge */}
                  <div className="absolute -top-3 -right-3 p-2 rounded-xl opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${ACCENT_COLOR}15, ${ACCENT_COLOR}05)`,
                      border: `1px solid ${ACCENT_COLOR}15`
                    }}
                  >
                    <Icon size={14} style={{ color: ACCENT_COLOR }} />
                  </div>

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[${ACCENT_COLOR}] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-white/50 text-sm font-light flex items-center gap-1.5">
                        <Building size={12} />
                        {exp.company}
                      </p>
                    </div>
                    <span 
                      className="text-[10px] px-3 py-1 rounded-full whitespace-nowrap font-medium"
                      style={{ 
                        backgroundColor: `${ACCENT_COLOR}12`,
                        color: ACCENT_COLOR
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-3 text-xs text-white/25 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                    {exp.duration !== '-' && (
                      <span 
                        className="px-2 py-0.5 rounded-full text-[10px]"
                        style={{ 
                          backgroundColor: `${ACCENT_COLOR}08`,
                          color: ACCENT_COLOR
                        }}
                      >
                        {exp.duration}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {exp.technologies.slice(0, 5).map((tech) => (
                        <span 
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                          style={{ 
                            backgroundColor: `${ACCENT_COLOR}06`,
                            color: ACCENT_COLOR,
                            opacity: 0.8
                          }}
                        >
                          #{tech}
                        </span>
                      ))}
                      {exp.technologies.length > 5 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full text-white/20">
                          +{exp.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="pt-3 border-t" style={{ borderColor: `${ACCENT_COLOR}08` }}>
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-2 text-xs text-white/30 mt-1.5 first:mt-0"
                        >
                          <ChevronRight size={12} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT_COLOR }} />
                          <span className="font-light">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats footer */}
        <motion.div 
          className="mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 p-6 rounded-2xl border"
            style={{ 
              borderColor: `${ACCENT_COLOR}10`,
              background: `${TEXT_COLOR}02`
            }}
          >
            {[
              { label: 'Experiences', value: experiences.length },
              { label: 'Companies', value: new Set(experiences.map(e => e.company)).size },
              { label: 'Technologies', value: experiences.reduce((acc, e) => acc + e.technologies.length, 0) },
              { label: 'Achievements', value: experiences.reduce((acc, e) => acc + (e.achievements?.length || 0), 0) }
            ].map((stat, index) => {
              const Icon = getStatsIcon(stat.label);
              return (
                <motion.div 
                  key={stat.label}
                  className="text-center group cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon size={14} style={{ color: ACCENT_COLOR }} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    <p className="text-2xl font-bold" style={{ color: ACCENT_COLOR }}>
                      {stat.value}
                    </p>
                  </div>
                  <p className="text-[10px] text-white/20 font-light tracking-wider uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};