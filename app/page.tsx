"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconDownload } from '@tabler/icons-react';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-6xl md:text-5xl font-bold mb-6 leading-tight">
            Hello, I'm 
            <span 
                className="text-[#21D375]"
                style={{ fontFamily: 'Cooper' }}
            > JOBA Razafindrasoa Genitah</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Développeuse Fullstack Freelance
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Je conçois et développe des applications web modernes,
            performantes et sécurisées avec des technologies comme
            Next.js, React, Node.js et Java.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="border border-[#21D375] text-[#21D375] px-6 py-3 rounded-lg hover:bg-[#244539] hover:text-white transition"
            >
              Voir mes projets
            </a>

            <a
              href="/cv.pdf"
              download="Mon_CV.pdf"
              className="flex items-center gap-1 border border-[#21D375] text-[#21D375] px-6 py-3 rounded-lg hover:bg-[#244539] hover:text-white transition"
            >
                <IconDownload size={22} className="group-hover:translate-y-1 transition-transform" />
                    <span>Download CV </span>
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <Image
              src="/Images.jpg"
              alt="Photo JOBA"
              fill
              className="object-cover rounded-full shadow-2xl border-4 border-[#21D375]"
            />
          </div>
        </motion.div>

      </div>

    </section>
  );
}
