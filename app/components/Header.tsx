"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { User } from "@phosphor-icons/react";
import { IconCode, IconMail } from '@tabler/icons-react';
import { StarsIcon } from "hugeicons-react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialisation et lecture du localStorage
  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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

  return (
    <motion.header
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="bg-custom-header shadow-md fixed w-full z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo - On met text-white car bg-light-bg est foncé */}
        <div 
          className="text-2xl font-bold text-white dark:text-white"
          style={{ fontFamily: 'Cooper' }}
        >
          <span className="text-gray-500 font-mono opacity-50">{"{"}</span>
          JOBA
          <span className="text-gray-500 font-mono opacity-50">{"}"}</span>
        </div>


        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-white">
          <Link href="#about" className="flex items-center gap-2 transition hover:opacity-90 hover:text-[#21D375]">
            <User weight="duotone" size={22} /> About
          </Link>
          
          <Link href="#skills" className="flex items-center gap-2 hover:opacity-90 transition hover:text-[#21D375]">
            <IconCode stroke={1.5} size={20} /> Skills
          </Link>
          
          <Link href="#projects" className="flex items-center gap-2 hover:opacity-90 transition hover:text-[#21D375]">
            <StarsIcon variant="twotone" size={20} /> Projects
          </Link>
          
          <Link href="#contact" className="flex items-center gap-2 hover:opacity-90 transition hover:text-[#21D375]">
            <IconMail size={18} /> Contact
          </Link>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-white" />
            )}
          </button>
        </nav>

        {/* Bouton mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-light-bg dark:bg-dark-bg px-4 py-4 space-y-4 text-white border-t border-white/10">
          <Link href="#about" className="block">À propos</Link>
          <Link href="#skills" className="block">Compétences</Link>
          <Link href="#projects" className="block">Projets</Link>
          <Link href="#contact" className="block">Contact</Link>
          <button onClick={toggleTheme} className="flex items-center gap-2 pt-2 border-t border-white/10 w-full text-left">
            {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
            {darkMode ? "Mode Clair" : "Mode Sombre"}
          </button>
        </nav>
      )}
    </motion.header>
  );
}
