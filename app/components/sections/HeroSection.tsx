'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { IconDownload } from '@tabler/icons-react';
import { FloatingShape } from '@/app/components/FloatingShape';
import { ACCENT_COLOR, BG_COLOR } from '@/app/constants';

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <section id="acceuil" className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Fond 3D animé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 50%, ${ACCENT_COLOR}15, transparent 70%)` }} />
        <FloatingShape delay={0} />
        <FloatingShape delay={4} />
        <FloatingShape delay={8} />
        
        {/* Grille 3D */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(${ACCENT_COLOR}20 1px, transparent 1px), linear-gradient(90deg, ${ACCENT_COLOR}20 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: 'rotateX(50deg) scale(2)',
          opacity: 0.1,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texte à gauche */}
          <motion.div
            style={{ opacity, scale }}
            className="space-y-6 text-center md:text-left"
          >
            {/* Badge 3D */}
            <motion.div
              initial={{ opacity: 0, y: -50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full border backdrop-blur-sm"
              style={{ borderColor: `${ACCENT_COLOR}50`, background: `${ACCENT_COLOR}10` }}
            >
              <span className="text-sm" style={{ color: ACCENT_COLOR }}>✦ Available for work</span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold"
              style={{ textShadow: `0 10px 30px ${ACCENT_COLOR}40` }}
            >
              Hello, I'm{" "}
              <span className="relative inline-block" style={{ color: ACCENT_COLOR }}>
                JOBA
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1"
                  style={{ backgroundColor: ACCENT_COLOR }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="text-xl md:text-2xl"
            >
              <span style={{ color: ACCENT_COLOR }}>&lt;</span>
              Junior Fullstack &amp; Mobile Developer
              <span style={{ color: ACCENT_COLOR }}>/&gt;</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/70 max-w-lg mx-auto md:mx-0"
            >
              I design and develop modern, high-performance web applications using Next.js, React, Node.js, Python, and Laravel.
            </motion.p>

            {/* Boutons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full font-semibold relative overflow-hidden group"
                style={{ backgroundColor: ACCENT_COLOR, color: BG_COLOR }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              
              <motion.a
                href="/CV_JOBA_Razafindrasoa_Genitah.pdf"
                download
                className="px-6 py-3 rounded-full font-semibold border backdrop-blur-sm"
                style={{ borderColor: ACCENT_COLOR, color: ACCENT_COLOR }}
                whileHover={{ scale: 1.05, y: -5, backgroundColor: `${ACCENT_COLOR}20` }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV <IconDownload size={18} className="inline ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image avec animation 3D à droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100, damping: 15 }}
            className="flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Cercles orbitaux */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed"
                style={{ borderColor: `${ACCENT_COLOR}50` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border"
                style={{ borderColor: `${ACCENT_COLOR}30` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full border"
                style={{ borderColor: `${ACCENT_COLOR}15` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Image principale */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/cv1.jpg"
                  alt="JOBA Photo"
                  loading="eager"
                  fill
                  className="object-cover rounded-full shadow-2xl relative z-10"
                  style={{ border: `4px solid ${ACCENT_COLOR}` }}
                />
                
                {/* Effet de brillance */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                />
              </motion.div>

              {/* Badge développeur */}
              <motion.div
                animate={{ x: [0, 8, -8, 0], y: [0, -12, 12, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.15, rotate: 0 }}
                className="absolute -bottom-6 -right-8 md:bottom-10 md:-right-12 px-4 py-2 rounded-full shadow-xl border-2 border-white flex items-center gap-2 z-30 whitespace-nowrap"
                style={{ backgroundColor: ACCENT_COLOR, color: BG_COLOR }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: BG_COLOR }}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs md:text-sm font-bold tracking-wider">&lt; DEVELOPPER /&gt;</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 flex justify-center" style={{ borderColor: ACCENT_COLOR }}>
          <motion.div className="w-1 h-2 rounded-full mt-2" style={{ backgroundColor: ACCENT_COLOR }} animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
};