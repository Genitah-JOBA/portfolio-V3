"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { User, HouseLine } from "@phosphor-icons/react";
import { IconCode, IconMail } from '@tabler/icons-react';
import { StarsIcon } from "hugeicons-react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Couleurs des accents uniquement
  const lightAccent = "#5D8D11"; // Vert olive pour les accents en mode clair
  const darkAccent = "#21D375"; // Vert néon pour les accents sombres
  const lightTextColor = "#1E293B"; // Texte foncé pour mode clair
  const darkTextColor = "#FFFFFF"; // Texte blanc pour mode sombre

  // Initialisation et lecture du localStorage
  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Détection du scroll pour cacher/montrer le header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Fonction pour changer le mode
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // Évite le bug d'affichage au premier chargement
  if (!mounted) return null;

  // Variantes d'animation spectaculaire
  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -100,
      scale: 0.8,
      rotateX: -90,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 80,
        duration: 0.8,
        delay: 0.1
      }
    },
    scrollDown: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={scrollDirection === "down" && lastScrollY > 200 ? "scrollDown" : "visible"}
      whileInView="visible"
      viewport={{ once: false, margin: "-10px" }}
      // UTILISATION DE LA CLASS bg-custom-header DU GLOBAL.CSS
      className="fixed w-full z-50 transition-colors duration-300 bg-custom-header"
      style={{ 
        boxShadow: darkMode 
          ? '0 4px 20px rgba(0,0,0,0.3)' 
          : '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      {/* Effet de particules lumineuses */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Ligne lumineuse qui traverse */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5D8D11] to-transparent dark:via-[#21D375]"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: 0.5 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear"
          }}
        />
        
        {/* Particules flottantes - avec positions fixes pour éviter l'erreur d'hydratation */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, row) => (
            Array.from({ length: 4 }).map((_, col) => {
              const baseTop = 10 + row * 18;
              const baseLeft = 5 + col * 23;
              const delay = (row * 4 + col) * 0.15;
              const duration = 3 + (row + col) * 0.3;
              const xOffset = (row + col) % 2 === 0 ? 15 : -15;
              const yOffset = -20 - (row * 2);
              
              return (
                <motion.div
                  key={`${row}-${col}`}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    top: `${baseTop}%`,
                    left: `${baseLeft}%`,
                    backgroundColor: darkMode ? darkAccent : lightAccent,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                    y: [0, yOffset, 0],
                    x: [0, xOffset, 0],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut"
                  }}
                />
              );
            })
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 relative z-10">
        
        {/* Logo avec animation */}
        <motion.div 
          className="text-2xl font-bold relative group"
          style={{ 
            fontFamily: 'Cooper',
            color: darkMode ? darkTextColor : lightTextColor
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 blur-xl"
            style={{
              backgroundColor: darkMode ? `${darkAccent}20` : `${lightAccent}20`,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-gray-500 font-mono opacity-50 relative z-10">{"{"}</span>
            JOBA
          <span className="text-gray-500 font-mono opacity-50 relative z-10">{"}"}</span>
        </motion.div>

        {/* Menu desktop - ICÔNES STABLES */}
        <nav className="hidden md:flex items-center space-x-6" style={{ color: darkMode ? darkTextColor : lightTextColor }}>
          {[
            { href: "#Acceuil", icon: <HouseLine size={22} weight="duotone" />, label: "Home" },
            { href: "#about", icon: <User weight="duotone" size={22} />, label: "About" },
            { href: "#skills", icon: <IconCode stroke={1.5} size={20} />, label: "Skills" },
            { href: "#projects", icon: <StarsIcon size={20} />, label: "Projects" },
            { href: "#contact", icon: <IconMail size={18} />, label: "Contact" },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3 + index * 0.1,
                type: "spring",
                damping: 12
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="relative group"
            >
              <Link 
                href={item.href} 
                className="flex items-center gap-2 transition relative"
                style={{ 
                  color: darkMode ? darkTextColor : lightTextColor,
                }}
              >
                {/* ICÔNE SANS ANIMATION DE ROTATION */}
                <span 
                  className="transition-colors"
                  style={{ 
                    color: 'inherit',
                  }}
                >
                  {item.icon}
                </span>
                {item.label}
                
                {/* Effet de soulignement au hover */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5"
                  style={{ backgroundColor: darkMode ? darkAccent : lightAccent }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              
              {/* Particule au hover */}
              <motion.div
                className="absolute -inset-2 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: darkMode ? darkAccent : lightAccent }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}

          <motion.button 
            onClick={toggleTheme}
            className="p-2 rounded-xl transition-all relative group"
            style={{ 
              backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              color: darkMode ? darkTextColor : lightTextColor
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-md"
              style={{ backgroundColor: darkMode ? `${darkAccent}20` : `${lightAccent}20` }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            {darkMode ? (
              <Sun size={20} className="text-yellow-400 relative z-10" />
            ) : (
              <Moon size={20} className="relative z-10" style={{ color: lightTextColor }} />
            )}
          </motion.button>
        </nav>

        {/* Bouton mobile avec animation */}
        <motion.div 
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none relative w-8 h-8 flex items-center justify-center"
            style={{ color: darkMode ? darkTextColor : lightTextColor }}
          >
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              {isOpen ? (
                <motion.span
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  className="text-2xl"
                >
                  ✕
                </motion.span>
              ) : (
                <motion.span
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  className="text-2xl"
                >
                  ☰
                </motion.span>
              )}
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Menu mobile avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // UTILISATION DE LA CLASS bg-custom-header POUR LE MENU MOBILE AUSSI
            className="md:hidden px-4 py-4 space-y-4 border-t overflow-hidden bg-custom-header"
            style={{ 
              borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              color: darkMode ? darkTextColor : lightTextColor
            }}
          >
            {[
              { href: "#about", label: "À propos", icon: <User size={18} /> },
              { href: "#skills", label: "Compétences", icon: <IconCode size={18} /> },
              { href: "#projects", label: "Projets", icon: <StarsIcon size={18} /> },
              { href: "#contact", label: "Contact", icon: <IconMail size={18} /> },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  className="flex items-center gap-2 transition"
                  style={{ color: darkMode ? darkTextColor : lightTextColor }}
                  onClick={() => setIsOpen(false)}
                >
                  <span style={{ color: darkMode ? darkAccent : lightAccent }}>{item.icon}</span>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.button 
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 pt-2 border-t w-full text-left transition"
              style={{ 
                borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                color: darkMode ? darkTextColor : lightTextColor
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400"/>
              ) : (
                <Moon size={18} style={{ color: lightTextColor }} />
              )}
              {darkMode ? "Mode Clair" : "Mode Sombre"}
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}