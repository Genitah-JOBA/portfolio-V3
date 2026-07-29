'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Sparkles, User, AtSign, MessageSquare, Briefcase } from 'lucide-react';
import { MessageBox } from '@/app/components/MessageBox';
import { ACCENT_COLOR, TEXT_COLOR, BG_COLOR } from '@/app/constants'; // ← Ajoutez BG_COLOR ici
import { MessageBoxState } from '@/app/types';

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [messageBox, setMessageBox] = useState<MessageBoxState>({ show: false, type: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMessageBox({ show: true, type: 'success', message: 'Message sent successfully!' });
      formRef.current?.reset();
      setLoading(false);
    }, 1000);
  };

  const socialLinks = [
    { Icon: Github, href: "https://github.com/Genitah-JOBA", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/joba-razafindrasoa-genitah-312645333", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:genitahrazafindrasoa@gmail.com", label: "Email" },
  ];

  const fields = [
    { name: 'name', placeholder: 'Your Name', icon: User, type: 'text' },
    { name: 'email', placeholder: 'Your Email', icon: AtSign, type: 'email' },
    { name: 'subject', placeholder: 'Subject', icon: Briefcase, type: 'text' },
  ];

  return (
    <>
      {messageBox.show && (
        <MessageBox 
          {...messageBox} 
          onClose={() => setMessageBox({ show: false, type: '', message: '' })} 
        />
      )}

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="max-w-3xl mx-auto my-32 rounded-3xl p-10 border relative overflow-hidden"
        style={{ 
          background: `radial-gradient(ellipse at 30% 20%, ${ACCENT_COLOR}08, transparent 70%), ${TEXT_COLOR}02`,
          borderColor: `${ACCENT_COLOR}15`
        }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: ACCENT_COLOR }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-5" style={{ backgroundColor: ACCENT_COLOR }} />
        
        <div className="relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-4 border" style={{ borderColor: `${ACCENT_COLOR}20` }}>
              <Sparkles size={14} style={{ color: ACCENT_COLOR }} />
              <span className="text-xs font-medium" style={{ color: ACCENT_COLOR }}>GET IN TOUCH</span>
              <Sparkles size={14} style={{ color: ACCENT_COLOR }} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Let's{" "}
              <span 
                className="text-transparent bg-clip-text" 
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}60)` 
                }}
              >
                Connect
              </span>
            </h2>
            <p className="text-white/40 mt-3 text-lg">
              Have a project in mind? Let's bring it to life together
            </p>
          </motion.div>

          {/* Form */}
          <motion.form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              {fields.slice(0, 2).map((field) => (
                <motion.div 
                  key={field.name}
                  className="relative"
                  whileHover={{ y: -1 }}
                >
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300" style={{ color: focused === field.name ? ACCENT_COLOR : `${TEXT_COLOR}30` }}>
                    <field.icon size={18} />
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full pl-12 pr-5 py-3.5 rounded-xl border bg-white/5 outline-none transition-all duration-300"
                    style={{ 
                      borderColor: focused === field.name ? ACCENT_COLOR : `${ACCENT_COLOR}15`,
                      color: TEXT_COLOR,
                      boxShadow: focused === field.name ? `0 0 30px ${ACCENT_COLOR}05` : 'none'
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Subject */}
            <motion.div 
              className="relative"
              whileHover={{ y: -1 }}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300" style={{ color: focused === 'subject' ? ACCENT_COLOR : `${TEXT_COLOR}30` }}>
                <Briefcase size={18} />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
                className="w-full pl-12 pr-5 py-3.5 rounded-xl border bg-white/5 outline-none transition-all duration-300"
                style={{ 
                  borderColor: focused === 'subject' ? ACCENT_COLOR : `${ACCENT_COLOR}15`,
                  color: TEXT_COLOR,
                  boxShadow: focused === 'subject' ? `0 0 30px ${ACCENT_COLOR}05` : 'none'
                }}
              />
            </motion.div>

            {/* Message */}
            <motion.div 
              className="relative"
              whileHover={{ y: -1 }}
            >
              <div className="absolute left-4 top-4 transition-colors duration-300" style={{ color: focused === 'message' ? ACCENT_COLOR : `${TEXT_COLOR}30` }}>
                <MessageSquare size={18} />
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className="w-full pl-12 pr-5 py-3.5 rounded-xl border bg-white/5 outline-none transition-all duration-300 resize-none"
                style={{ 
                  borderColor: focused === 'message' ? ACCENT_COLOR : `${ACCENT_COLOR}15`,
                  color: TEXT_COLOR,
                  boxShadow: focused === 'message' ? `0 0 30px ${ACCENT_COLOR}05` : 'none'
                }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button 
              type="submit" 
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${ACCENT_COLOR}, ${ACCENT_COLOR}80)`,
                color: BG_COLOR
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(135deg, ${ACCENT_COLOR}60, ${ACCENT_COLOR})`,
                  opacity: 0
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map(({ Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 rounded-2xl transition-all duration-300"
                style={{ 
                  backgroundColor: `${TEXT_COLOR}05`,
                  border: `1px solid ${ACCENT_COLOR}10`,
                  color: TEXT_COLOR
                }}
              >
                <Icon size={22} className="transition-colors duration-300 group-hover:text-[#6EE7B7]" />
                
                {/* Tooltip */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] px-2 py-0.5 rounded whitespace-nowrap"
                  style={{ 
                    backgroundColor: ACCENT_COLOR,
                    color: BG_COLOR
                  }}
                >
                  {label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex justify-center gap-8 mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <p className="text-2xl font-bold" style={{ color: ACCENT_COLOR }}>3+</p>
              <p className="text-xs text-white/30">Years Experience</p>
            </div>
            <div className="w-px" style={{ backgroundColor: `${ACCENT_COLOR}15` }} />
            <div>
              <p className="text-2xl font-bold" style={{ color: ACCENT_COLOR }}>8+</p>
              <p className="text-xs text-white/30">Projects Done</p>
            </div>
            <div className="w-px" style={{ backgroundColor: `${ACCENT_COLOR}15` }} />
            <div>
              <p className="text-2xl font-bold" style={{ color: ACCENT_COLOR }}>100%</p>
              <p className="text-xs text-white/30">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};