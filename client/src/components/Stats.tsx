import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useInView, animate } from "motion/react";
import { 
  Briefcase, 
  Users, 
  Clock, 
  Zap 
} from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  key?: React.Key;
}

const StatCard = ({ icon: Icon, value, suffix, label, delay }: StatItemProps) => {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut", delay: delay + 0.5 });
    }
  }, [isInView, value, count, delay]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [rounded]);

  // Tilt effect
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
    const xPct = (mouseX / width - 0.5) * 20;
    const yPct = (mouseY / height - 0.5) * -20;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(250,204,21,0.1)]"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-[2.5rem] -z-10" />
      
      <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background-dark transition-all duration-500 yellow-shadow">
        <Icon size={32} className="text-primary group-hover:text-background-dark transition-colors duration-500" />
      </div>

      <div className="flex items-baseline gap-1 mb-2">
        <motion.span className="text-5xl md:text-6xl font-black text-white font-display tracking-tighter">
          {displayValue}
        </motion.span>
        <span className="text-3xl font-bold text-primary">{suffix}</span>
      </div>

      <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2">
        {label}
      </p>

      {/* Hover Border Glow */}
      <div className="absolute inset-px rounded-[2.5rem] border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function Stats() {
  const stats = [
    { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed", delay: 0.1 },
    { icon: Users, value: 30, suffix: "+", label: "Happy Clients", delay: 0.2 },
    { icon: Clock, value: 3, suffix: "+", label: "Years Experience", delay: 0.3 },
    { icon: Zap, value: 20, suffix: "+", label: "Tech Mastered", delay: 0.4 },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.03)_0%,transparent_70%)]" />
        {/* Moving Light Beam */}
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
