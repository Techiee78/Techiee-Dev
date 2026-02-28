import React from "react";
import { motion } from "motion/react";
import { 
  MessageSquare, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock,
  Zap,
  Layout
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  const whatsappNumber = "8477939338";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="pt-4 pb-48 px-6 bg-background-dark min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.05)_0%,transparent_50%)]" />
        
        {/* Animated Light Beam Sweep */}
        <motion.div 
          animate={{ 
            x: ["-100%", "200%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 -z-10"
        />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative glass-card p-12 md:p-24 rounded-[4rem] border-primary/20 text-center overflow-hidden"
        >
          {/* Neon Border Animation */}
          <div className="absolute inset-0 rounded-[4rem] border border-primary/10 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ 
                rotate: 360 
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(250,204,21,0.2)_360deg)] opacity-50"
            />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/20 mb-10"
            >
              <Zap size={14} className="text-primary animate-pulse" fill="currentColor" />
              <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">Let's Work Together</span>
            </motion.div>
            
            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-10 leading-[0.9]"
            >
              Have a Project in Mind? <br />
              <span className="text-primary">Let's Build Something</span> <br />
              Amazing Together
            </motion.h1>
            
            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-16"
            >
              I help businesses and startups turn ideas into high-performance digital products with modern technology and premium user experiences.
            </motion.p>

            {/* Primary Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-12"
            >
              <Link 
                to="/contact"
                className="group relative flex items-center gap-4 bg-primary text-background-dark px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm yellow-shadow hover:scale-105 transition-all active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all active:scale-95"
              >
                <Phone size={20} className="text-primary" /> WhatsApp Me
              </a>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] hover:text-primary transition-colors group"
              >
                <Layout size={14} /> View Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Info */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex items-center justify-center gap-8 pt-12 border-t border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                  <Clock size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Response Time</p>
                  <p className="text-xs font-bold text-white">Usually within 1 hour</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                  <MessageSquare size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Consultation</p>
                  <p className="text-xs font-bold text-white">Free 30-min Strategy Call</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
