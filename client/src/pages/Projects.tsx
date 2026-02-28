import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useSpring, useMotionValue } from "motion/react";
import { 
  ExternalLink, 
  Github, 
  ChevronRight, 
  ArrowUpRight,
  Code,
  Layout,
  ShoppingBag,
  Smartphone,
  X,
  Eye
} from "lucide-react";

interface Project {
  title: string;
  category: string;
  desc: string;
  fullDesc: string;
  tags: string[];
  img: string;
  liveUrl: string;
  repoUrl: string;
}

const ProjectCard = ({ project, onOpenDetails }: { project: Project; onOpenDetails: (p: Project) => void; key?: React.Key }) => {
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 10;
    const yPct = (mouseY / height - 0.5) * -10;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:border-primary/40 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={project.img} 
          referrerPolicy="no-referrer" 
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="size-12 rounded-full bg-primary text-background-dark flex items-center justify-center hover:scale-110 transition-transform yellow-shadow"
          >
            <ExternalLink size={20} />
          </a>
          <button 
            onClick={() => onOpenDetails(project)}
            className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-black tracking-widest text-primary/80 uppercase px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 uppercase italic tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light line-clamp-2">
          {project.desc}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <button 
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.3em] group/btn"
          >
            View Details 
            <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-primary transition-colors"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-px rounded-[2.5rem] border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ["All", "Web", "E-Commerce", "Apps"];

  const projects: Project[] = [
    {
      title: "Lumina SaaS",
      category: "Web",
      desc: "A high-performance monitoring platform for decentralized AI nodes with real-time analytics.",
      fullDesc: "Lumina is a comprehensive SaaS platform designed for AI infrastructure providers. It features real-time telemetry, predictive health analytics using machine learning, and a fully customizable dashboard. Built with Next.js 14, it leverages server actions and real-time WebSockets for sub-ms data updates.",
      tags: ["Next.js", "TypeScript", "Tailwind", "OpenAI"],
      img: "https://picsum.photos/seed/lumina/800/600",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Vogue Store",
      category: "E-Commerce",
      desc: "Luxury fashion marketplace with seamless Stripe integration and dynamic inventory management.",
      fullDesc: "Vogue Store is a premium e-commerce experience focused on high-end fashion. It includes a custom-built cart system, multi-currency support, and a robust admin panel for inventory tracking. The frontend is optimized for Core Web Vitals, ensuring a smooth shopping experience on all devices.",
      tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
      img: "https://picsum.photos/seed/vogue/800/600",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "FitTrack Pro",
      category: "Apps",
      desc: "Cross-platform fitness application with real-time biometric tracking and AI workout plans.",
      fullDesc: "FitTrack Pro is a mobile-first application that helps users achieve their fitness goals. It integrates with wearable devices to track heart rate and activity levels, using AI to generate personalized workout and nutrition plans. Built with React Native for native-level performance.",
      tags: ["React Native", "Firebase", "HealthKit", "AI"],
      img: "https://picsum.photos/seed/fittrack/800/600",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "CryptoPulse",
      category: "Web",
      desc: "Real-time cryptocurrency tracking dashboard with advanced charting and sentiment analysis.",
      fullDesc: "CryptoPulse provides traders with a powerful interface to monitor the crypto market. It features advanced D3.js charts, real-time price feeds via Binance API, and a social sentiment engine that analyzes Twitter and Reddit data to predict market moves.",
      tags: ["React", "D3.js", "WebSockets", "Python"],
      img: "https://picsum.photos/seed/crypto/800/600",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "EcoMarket",
      category: "E-Commerce",
      desc: "Sustainable products marketplace with carbon footprint tracking and eco-friendly shipping.",
      fullDesc: "EcoMarket is a niche e-commerce platform dedicated to sustainable living. It features a unique 'Impact Score' for every product and integrates with carbon offset APIs to provide carbon-neutral shipping options. The platform is built with a focus on accessibility and speed.",
      tags: ["Next.js", "Shopify API", "Tailwind", "GraphQL"],
      img: "https://picsum.photos/seed/eco/800/600",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Zenith CRM",
      category: "Web",
      desc: "Enterprise-grade customer relationship management system with automated lead scoring.",
      fullDesc: "Zenith CRM is designed for high-growth sales teams. It automates repetitive tasks like lead entry and follow-up reminders, using a custom scoring algorithm to prioritize high-value prospects. It features a robust API for integration with existing sales tools.",
      tags: ["React", "Express", "MongoDB", "Redis"],
      img: "https://picsum.photos/seed/zenith/800/600",
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="pb-48 pt-4 px-6 bg-background-dark min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 size-[600px] bg-white/2 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-6"
          >
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">My Work</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-8"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-12"
          >
            A showcase of my latest work, highlighting high-performance development, modern design, and scalable architecture.
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${activeFilter === filter ? "text-background-dark" : "text-slate-400 hover:text-white"}`}
              >
                {activeFilter === filter && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary rounded-xl -z-10 yellow-shadow"
                  />
                )}
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                onOpenDetails={setSelectedProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 p-12 rounded-[3rem] glass-card border-dashed border-primary/30 flex flex-col items-center text-center gap-8 bg-primary/5"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Have a project in mind?</h3>
            <p className="text-slate-400 text-lg font-light">Let's build something amazing together.</p>
          </div>
          <Link to="/contact" className="flex items-center gap-4 bg-gradient-to-br from-primary to-primary-dark text-background-dark px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm yellow-shadow hover:scale-105 transition-all group">
            Start a Project 
            <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[3rem] border-primary/20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-slate-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full z-10"
              >
                <X size={24} />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative">
                  <img 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                    src={selectedProject.img} 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent lg:hidden" />
                </div>
                
                <div className="p-10 lg:p-16">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase px-3 py-1 bg-primary/10 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                    {selectedProject.fullDesc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-white/60 uppercase tracking-widest px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-10 py-5 bg-primary text-background-dark font-black uppercase tracking-[0.2em] text-xs rounded-2xl yellow-shadow hover:bg-white transition-all active:scale-95"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                    <a 
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white/10 transition-all active:scale-95"
                    >
                      GitHub <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
