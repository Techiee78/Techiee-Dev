import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, 
  Server, 
  Wrench, 
  Cpu, 
  Globe, 
  Database, 
  Cloud, 
  Github, 
  Figma, 
  Layers,
  Zap,
  Palette
} from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ElementType;
  category: string;
  proficiency: number;
}

const TechCard = ({ tech, index }: { tech: TechItem; index: number; key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative glass-card p-6 rounded-3xl border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 -z-10" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark transition-all duration-500 yellow-shadow">
          <tech.icon size={24} className="text-primary group-hover:text-background-dark transition-colors" />
        </div>
        <h3 className="text-lg font-bold text-white uppercase italic tracking-tight group-hover:text-primary transition-colors">
          {tech.name}
        </h3>
      </div>

      {/* Proficiency Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
          <span>Proficiency</span>
          <span className="text-primary">{tech.proficiency}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.05, duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-primary-dark yellow-shadow"
          />
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-px rounded-3xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

const Marquee = ({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) => {
  return (
    <div className="relative flex overflow-hidden py-10 select-none">
      <div className={`flex min-w-full shrink-0 items-center justify-around gap-10 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 px-8 py-4 glass-card rounded-2xl border-white/10 hover:border-primary/40 transition-all group cursor-default">
            <tech.icon size={20} className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xs font-black text-white uppercase tracking-[0.2em]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("All");

  const techStack: TechItem[] = [
    // Frontend
    { name: "React", icon: Code2, category: "Frontend", proficiency: 95 },
    { name: "Next.js", icon: Globe, category: "Frontend", proficiency: 90 },
    { name: "HTML5", icon: Layers, proficiency: 98, category: "Frontend" },
    { name: "CSS3", icon: Palette, category: "Frontend", proficiency: 95 },
    { name: "JavaScript", icon: Cpu, category: "Frontend", proficiency: 96 },
    { name: "Tailwind CSS", icon: Zap, category: "Frontend", proficiency: 98 },
    
    // Backend
    { name: "Node.js", icon: Server, category: "Backend", proficiency: 92 },
    { name: "Express.js", icon: Zap, category: "Backend", proficiency: 94 },
    { name: "MongoDB", icon: Database, category: "Backend", proficiency: 88 },
    { name: "Firebase", icon: Cloud, category: "Backend", proficiency: 90 },
    { name: "REST APIs", icon: Code2, category: "Backend", proficiency: 95 },
    
    // Tools
    { name: "Git", icon: Github, category: "Tools", proficiency: 94 },
    { name: "GitHub", icon: Github, category: "Tools", proficiency: 96 },
    { name: "AWS", icon: Cloud, category: "Tools", proficiency: 82 },
    { name: "Vercel", icon: Globe, category: "Tools", proficiency: 98 },
    { name: "Railway", icon: Server, category: "Tools", proficiency: 90 },
    { name: "Figma", icon: Figma, category: "Tools", proficiency: 85 },
  ];

  const categories = ["All", "Frontend", "Backend", "Tools"];
  const filteredTech = activeTab === "All" ? techStack : techStack.filter(t => t.category === activeTab);

  return (
    <div className="pt-4 pb-48 px-6 bg-background-dark min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
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
            <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Tech Stack</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white mb-8"
          >
            Technologies I <span className="text-primary">Work With</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          >
            I use modern tools and technologies to build scalable, high-performance digital solutions.
          </motion.p>
        </div>

        {/* Option 1: Infinite Marquee */}
        <div className="mb-32 space-y-4">
          <Marquee items={techStack.slice(0, 9)} />
          <Marquee items={techStack.slice(9)} reverse />
        </div>

        {/* Option 2: Grid with Tabs */}
        <div className="flex flex-col gap-16">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${activeTab === cat ? "text-background-dark" : "text-slate-400 hover:text-white"}`}
                >
                  {activeTab === cat && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-xl -z-10 yellow-shadow"
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-48 p-12 rounded-[3rem] glass-card border-dashed border-primary/30 flex flex-col items-center text-center gap-8 bg-primary/5"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Mastering the Future</h3>
            <p className="text-slate-400 text-lg font-light">Constantly evolving and learning new technologies to stay at the cutting edge.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
              <div className="size-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Available for new projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Add these to your globals.css or index.css if not already present
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-100%); }
// }
// @keyframes marquee-reverse {
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(0); }
// }
// .animate-marquee { animation: marquee 30s linear infinite; }
// .animate-marquee-reverse { animation: marquee-reverse 30s linear infinite; }
