"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { User, HouseLine } from "@phosphor-icons/react";
import { IconCode, IconMail } from '@tabler/icons-react';
import { StarsIcon } from "hugeicons-react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Briefcase } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  const accentColor = "#14B89C";
  const textColor = "#FFFFFF";
  const backgroundColor = "#0A0F1A";

  const navItems = [
    { href: "#acceuil", icon: <HouseLine size={22} weight="duotone" />, label: "Home" },
    { href: "#about", icon: <User weight="duotone" size={22} />, label: "About" },
    { href: "#experience", icon: <Briefcase size={22} />, label: "Experience" },
    { href: "#skills", icon: <IconCode stroke={1.5} size={20} />, label: "Knowledge" },
    { href: "#projects", icon: <StarsIcon size={20} />, label: "Projects" },
    { href: "#contact", icon: <IconMail size={18} />, label: "Contact" },
  ];

  const mobileNavItems = [
    { href: "#acceuil", icon: <HouseLine size={18} weight="duotone" />, label: "Home" },
    { href: "#about", icon: <User weight="duotone" size={18} />, label: "About" },
    { href: "#experience", icon: <Briefcase size={18} />, label: "Experience" },
    { href: "#skills", icon: <IconCode stroke={1.5} size={18} />, label: "Knowledge" },
    { href: "#projects", icon: <StarsIcon size={18} />, label: "Projects" },
    { href: "#contact", icon: <IconMail size={18} />, label: "Contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // NOUVELLE FONCTION DE SCROLL AMÉLIORÉE
  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    e.stopPropagation(); // Empêche la propagation

    // Ferme le menu immédiatement
    setIsOpen(false);

    // Attend un tick pour que le menu se ferme avant de scroll
    setTimeout(() => {
      // Récupère l'élément cible
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calcul de la position avec offset pour le header fixe
        const headerHeight = 80; // Hauteur approximative du header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        // Scroll vers la position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Mise à jour de l'URL sans rechargement (optionnel)
        if (history.pushState) {
          history.pushState(null, '', targetId);
        }
      } else {
        // Fallback si l'élément n'est pas trouvé
        console.warn(`Élément ${targetId} non trouvé`);
        
        // Essaie avec un délai plus long (pour les composants lazy-loaded)
        setTimeout(() => {
          const targetElementRetry = document.querySelector(targetId);
          if (targetElementRetry) {
            const headerHeight = 80;
            const elementPosition = targetElementRetry.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    }, 100); // Petit délai pour laisser le temps au menu de se fermer
  };

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
      transition: { duration: 0.3 }
    }
  };

  if (!mounted) return null;

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={scrollDirection === "down" && lastScrollY > 200 ? "scrollDown" : "visible"}
      whileInView="visible"
      viewport={{ once: false, margin: "-10px" }}
      className="fixed w-full z-50"
      style={{ 
        backgroundColor: backgroundColor,
        boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(0px)',
      }}
    >
      {/* Particules et ligne lumineuse */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#14B89C] to-transparent"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: 0.5 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear"
          }}
        />
        
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
                    backgroundColor: accentColor,
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
        
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold relative group"
          style={{ fontFamily: 'Cooper', color: textColor }}
          whileHover={{ scale: 1.1, rotateY: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 blur-xl"
            style={{ backgroundColor: `${accentColor}20` }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="opacity-50 relative z-10" style={{ color: accentColor }}>{"{"}</span>
            JOBA
          <span className="opacity-50 relative z-10" style={{ color: accentColor }}>{"}"}</span>
        </motion.div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-6" style={{ color: textColor }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20, rotateX: -45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
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
                onClick={(e) => smoothScrollTo(e, item.href)}
                className="flex items-center gap-2 transition relative"
                style={{ color: textColor }}
              >
                <motion.span 
                  style={{ color: accentColor }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.span>
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5"
                  style={{ backgroundColor: accentColor }}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <motion.div
                className="absolute -inset-2 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: accentColor }}
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
        </nav>

        {/* Bouton mobile */}
        <motion.div 
          className="md:hidden"
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none relative w-8 h-8 flex items-center justify-center"
            style={{ color: textColor }}
          >
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0, y: -20, rotateX: -90 }}
            animate={{ opacity: 1, height: "auto", y: 0, rotateX: 0 }}
            exit={{ opacity: 0, height: 0, y: -20, rotateX: -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden px-4 py-4 space-y-4 border-t overflow-hidden"
            style={{ 
              backgroundColor: backgroundColor,
              borderColor: 'rgba(255,255,255,0.1)',
              color: textColor,
              transformStyle: 'preserve-3d',
            }}
          >
            {mobileNavItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Link 
                  href={item.href} 
                  onClick={(e) => smoothScrollTo(e, item.href)}
                  className="flex items-center gap-3 transition py-2 px-3 rounded-lg group"
                  style={{ color: textColor }}
                >
                  <motion.span 
                    style={{ color: accentColor }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="group-hover:tracking-wider transition-all duration-300">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}