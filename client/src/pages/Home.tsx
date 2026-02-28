import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { 
  Terminal, 
  Layers, 
  Database, 
  Code, 
  Cpu, 
  ArrowUpRight,
  Star,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Stats from "../components/Stats";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <section className="relative h-full flex items-start md:items-center justify-center px-6 pt-[100px] md:pt-0">
          {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            style={{ x: springX, y: springY }}
            className="absolute top-1/4 left-1/4 size-[500px] bg-primary/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            style={{ 
              x: useTransform(springX, (v: number) => v * -1.5), 
              y: useTransform(springY, (v: number) => v * -1.5) 
            }}
            className="absolute bottom-1/4 right-1/4 size-[400px] bg-white/5 rounded-full blur-[100px]" 
          />
          {/* Light Beams */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-screen bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-50" />
          <div className="absolute top-1/2 left-0 w-screen h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-30" />
        </div>

        <motion.div 
          style={{ opacity, scale }} 
          className="max-w-7xl mx-auto w-full text-center z-10 px-4"
        >
          <div className="flex flex-col items-center gap-4 md:gap-8">
            {/* Glowing Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md yellow-shadow"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-[11px] font-black text-primary tracking-[0.3em] uppercase">Status: Online</span>
            </motion.div>

            {/* Large Bold Heading */}
            <div className="relative">
              {/* Radial Glow */}
              <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full -z-10" />
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase font-display"
              >
                <span className="block text-white">Creative</span>
                <span className="block hero-gradient-text shimmer">Full Stack</span>
                <span className="block text-white">Dev</span>
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light mt-2 md:mt-4"
            >
              Forging high-performance, scalable web ecosystems with a focus on neon-sharp precision and futuristic architecture.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-8"
            >
              <Link 
                to="/projects" 
                className="group relative flex items-center gap-3 md:gap-4 px-8 md:px-12 py-4 md:py-6 bg-gradient-to-br from-primary to-primary-dark text-background-dark font-black uppercase tracking-[0.2em] rounded-2xl transition-all hover:scale-105 active:scale-95 yellow-shadow overflow-hidden text-xs md:text-base"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">View Projects</span>
                <Terminal size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/contact" 
                className="px-8 md:px-12 py-4 md:py-6 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md text-xs md:text-base"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>

        {/* Floating 3D-like Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[10%] size-32 border-2 border-primary/20 rounded-3xl backdrop-blur-sm" 
          />
          <motion.div 
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -15, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-[10%] size-24 border border-white/10 rounded-full backdrop-blur-sm" 
          />
        </div>
        </section>
      </div>

      <div className="relative z-10 bg-background-dark">
        <Stats />
        <Pricing />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
