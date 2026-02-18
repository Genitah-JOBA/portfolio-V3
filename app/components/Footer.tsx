"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { User } from "@phosphor-icons/react";
import { IconCode, IconMail } from '@tabler/icons-react';
import { StarsIcon } from "hugeicons-react";
import { Sun, Moon } from "lucide-react";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-lightBg dark:bg-darkBg text-gray-800 dark:text-gray-200 mt-20 border-t border-gray-300 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Colonne 1 : Branding */}
        <div>
          <h2 
            className="text-2xl font-bold"
            style={{ fontFamily: 'Cooper' }}
           >
            JOBA°
           </h2>
          <p className="text-sm">
            Freelance Fullstack developer specializing in modern, 
            high-performance and secure web applications.
          </p>
        </div>

        {/* Colonne 2 : Navigation rapide */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="flex gap-1 hover:text-[#21D375] transition"><User weight="duotone" size={18} />About</Link></li>
            <li><Link href="#skills" className="flex gap-1 hover:text-[#21D375] transition"><IconCode stroke={1.5} size={18} />Skills</Link></li>
            <li><Link href="#projects" className="flex gap-1 hover:text-[#21D375] transition"><StarsIcon variant="twotone" size={18} />Projects</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Réseaux */}
        <div>
          <h3 className="font-semibold mb-3">Contacter me</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Genitah-JOBA"
              target="_blank"
              className="hover:text-[#21D375] transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-[#21D375] transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:genitahrazafindrasoa@gmail.com"
              className="hover:text-[#21D375] transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Ligne du bas */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} JOBA°. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
