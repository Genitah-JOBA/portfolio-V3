"use client";

import Link from "next/link";
import { 
  Github, Linkedin, Mail, Sparkles, Code2, 
  Heart, Zap, Award, User, Layers, Briefcase,
  MessageSquare, MapPin, Clock, Star, Shield,
  Globe, ArrowUpRight, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Couleurs selon le mode
  const lightColor = "#5D8D11";
  const darkColor = "#21D375";
  
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-lightBg dark:bg-darkBg text-gray-800 dark:text-gray-200 border-t border-gray-300 dark:border-gray-700 w-full relative overflow-hidden"
    >
      {/* Animations de fond permanentes - avec couleurs adaptatives */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ 
          background: [
            `radial-gradient(circle at 20% 30%, ${lightColor}10 0%, transparent 40%)`,
            `radial-gradient(circle at 80% 70%, ${lightColor}10 0%, transparent 40%)`,
            `radial-gradient(circle at 20% 30%, ${lightColor}10 0%, transparent 40%)`
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          // Version dark mode avec la couleur sombre
          '--dark-bg-start': `radial-gradient(circle at 20% 30%, ${darkColor}10 0%, transparent 40%)`,
          '--dark-bg-middle': `radial-gradient(circle at 80% 70%, ${darkColor}10 0%, transparent 40%)`,
          '--dark-bg-end': `radial-gradient(circle at 20% 30%, ${darkColor}10 0%, transparent 40%)`,
        } as React.CSSProperties}
        // Note: Pour gérer le dark mode proprement, on utilise une classe CSS séparée
      />

      {/* Vagues animées - couleur adaptative */}
      <svg className="absolute top-0 left-0 w-full h-8 opacity-20">
        <motion.path
          d="M0 10 Q 150 0, 300 10 T 600 10"
          stroke={lightColor}
          strokeWidth="1"
          fill="none"
          className="dark:stroke-[#21D375]"
          animate={{ 
            d: [
              "M0 10 Q 150 0, 300 10 T 600 10",
              "M0 15 Q 150 25, 300 15 T 600 15",
              "M0 10 Q 150 0, 300 10 T 600 10"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Particules flottantes - couleurs adaptatives */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${5 + i * 12}%`,
            top: `${10 + i * 8}%`,
            backgroundColor: `${lightColor}30`, // Opacité 30%
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 py-8 relative">
        {/* Section principale avec 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Colonne 1 - Brand & Stats */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block relative"
            >
              <h2 
                className="text-2xl font-bold relative z-10" 
                style={{ fontFamily: 'Cooper' }}
              >
                <motion.span
                  animate={{ 
                    color: ['#6B7280', lightColor, '#6B7280'],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="font-mono dark:color-animation-dark"
                >
                  {"{"}
                </motion.span>
                <motion.span
                  animate={{ 
                    textShadow: [
                      `0 0 0px ${lightColor}`,
                      `0 0 12px ${lightColor}`,
                      `0 0 0px ${lightColor}`
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="dark:text-shadow-dark"
                >
                  JOBA
                </motion.span>
                <motion.span
                  animate={{ 
                    color: ['#6B7280', lightColor, '#6B7280'],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="font-mono dark:color-animation-dark"
                >
                  {"}"}
                </motion.span>
              </h2>
              <motion.div
                className="absolute -inset-2 rounded-lg -z-10"
                style={{ backgroundColor: `${lightColor}10` }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-600 dark:text-gray-400 mt-3"
            >
              Fullstack Developer & Problem Solver
            </motion.p>

            {/* Statistiques animées */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
                { icon: Code2, value: "2", label: "Years" },
                { icon: Briefcase, value: "8+", label: "Projects" },
                { icon: Star, value: "2", label: "Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      color: [lightColor, '#3a5c0b', lightColor],
                    }}
                    transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                    className="dark:text-[#21D375] dark:color-animation-dark"
                  >
                    <stat.icon size={16} className="mx-auto" />
                  </motion.div>
                  <motion.div 
                    className="text-sm font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[8px] text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex items-center justify-center md:justify-start gap-2 mt-4 text-xs text-gray-500 dark:text-gray-500"
              animate={{ 
                x: [0, -2, 2, -2, 2, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <MapPin size={12} style={{ color: lightColor }} className="dark:text-[#21D375]" />
              <span>Madagascar</span>
              <Clock size={12} className="ml-2" style={{ color: lightColor }} className="dark:text-[#21D375]" />
              <span>UTC+3</span>
            </motion.div>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
              <Zap size={16} style={{ color: lightColor }} className="dark:text-[#21D375]" />
              <span>Navigation</span>
            </h3>
            
            <div className="space-y-2">
              {[
                { name: 'About', icon: User, href: '#about' },
                { name: 'Skills', icon: Layers, href: '#skills' },
                { name: 'Projects', icon: Briefcase, href: '#projects' },
                { name: 'Contact', icon: MessageSquare, href: '#contact' }
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-3 text-xs group"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                      }}
                      transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                    >
                      <item.icon size={14} className="text-gray-500 group-hover:transition-colors" style={{ groupHover: { color: lightColor } }} />
                    </motion.div>
                    <span className="group-hover:transition-colors" style={{ groupHover: { color: lightColor } }}>
                      {item.name}
                    </span>
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" style={{ color: lightColor }} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-4 p-2 rounded-lg"
              style={{ backgroundColor: `${lightColor}10` }}
              animate={{ 
                boxShadow: [
                  `0 0 0px ${lightColor}`,
                  `0 0 15px ${lightColor}30`,
                  `0 0 0px ${lightColor}`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2 text-[10px]">
                <Shield size={12} style={{ color: lightColor }} className="dark:text-[#21D375]" />
                <span>Available for freelance</span>
                <ArrowUpRight size={10} style={{ color: lightColor }} className="dark:text-[#21D375]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne 3 - Expertise */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
              <Award size={16} style={{ color: lightColor }} className="dark:text-[#21D375]" />
              <span>Expertise</span>
            </h3>

            <div className="space-y-3">
              {[
                { tech: "Vue.js", level: 70 },
                { tech: "Laravel", level: 75 },
                { tech: "MySQL", level: 90 },
                { tech: "GitHub", level: 85 },
                { tech: "Vs Code", level: 90 }
              ].map((skill, index) => (
                <motion.div
                  key={skill.tech}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between text-[10px] mb-1">
                    <span>{skill.tech}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: lightColor }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      animate={{ 
                        opacity: [1, 0.7, 1],
                      }}
                      style={{ originX: 0, backgroundColor: lightColor }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-4 flex items-center justify-center md:justify-start gap-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Globe size={14} style={{ color: lightColor }} className="dark:text-[#21D375]" />
            </motion.div>
          </motion.div>

          {/* Colonne 4 - Connect */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center justify-center md:justify-end gap-2">
              <Sparkles size={16} style={{ color: lightColor }} className="dark:text-[#21D375]" />
              <span>Connect</span>
            </h3>
            
            <div className="flex justify-center md:justify-end gap-3">
              {[
                { Icon: Github, href: "https://github.com/Genitah-JOBA", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/joba-razafindrasoa-genitah-312645333", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:genitahrazafindrasoa@gmail.com", label: "Email" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.6 + index * 0.1
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  <motion.div 
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    animate={{ 
                      backgroundColor: [
                        `${lightColor}10`,
                        `${lightColor}20`,
                        `${lightColor}10`
                      ]
                    }}
                    transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                  >
                    <item.Icon size={20} className="group-hover:transition-colors" style={{ color: 'inherit' }} />
                  </motion.div>
                  
                  {/* Tooltip animé */}
                  <motion.span 
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[8px] bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ y: 5, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {item.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>

            {/* Contact direct */}
            <motion.div 
              className="mt-6 space-y-2"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 px-4 py-2 text-white text-xs rounded-lg hover:opacity-90 transition-colors group"
                style={{ backgroundColor: lightColor }}
              >
                <MessageSquare size={14} />
                <span>Send Message</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight size={12} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Séparateur animé */}
        <motion.div 
          className="my-6 h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
          animate={{ 
            scaleX: [0.3, 1, 0.3],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Bottom bar avec infos légales */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-gray-500 dark:text-gray-500">
          <motion.div
            className="flex items-center gap-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Code2 size={12} style={{ color: lightColor }} className="dark:text-[#21D375]" />
            <span>© {currentYear} JOBA. All rights reserved.</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={10} style={{ color: lightColor }} className="dark:text-[#21D375]" />
            </motion.div>
          </motion.div>
          
          <div className="flex gap-4">
            {[
              { name: 'Privacy', icon: Shield },
              { name: 'Terms', icon: Award },
              { name: 'Sitemap', icon: Layers }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 2.5, delay: index * 0.5, repeat: Infinity }}
              >
                <Link 
                  href={`/${item.name.toLowerCase()}`} 
                  className="hover:transition-colors flex items-center gap-1"
                  style={{ hover: { color: lightColor } }}
                >
                  <item.icon size={10} style={{ color: 'inherit' }} />
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex items-center gap-2"
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Globe size={12} style={{ color: lightColor }} className="dark:text-[#21D375]" />
            <span>v2.0.0</span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}